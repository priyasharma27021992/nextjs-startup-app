import postgres from 'postgres';
import { LatestInvoiceRaw, Revenue } from './definitions';
import { formatCurrency } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

export async function fetchRevenue(){
    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await sql<Revenue[]>`SELECT * from revenue`;
        return data;
    }catch(error){
        console.error('Database error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchLatestInvoices() {
    try{
        const data = await sql<LatestInvoiceRaw[]>`
        SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5`;

        const latestInvoices = data.map((invoice) => ({
            ...invoice,
            amount: formatCurrency(invoice.amount)
        }));
        return latestInvoices;
    }catch(error){
        console.error('Database error:', error);
        throw new Error('Failed to fetch the latest invoices.');
    }
}

export async function fetchCardData() {
    try {
        const invoiceCountPromise = sql `SELECT COUNT(*) FROM invoices`;
        const customerCountPromise = sql `SELECT COUNT(*) FROM customers`;
        const invoicesStatusPromise = sql `SELECT
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 end) AS "pending"
        FROM invoices`;
        
        const data = await Promise.all([
            invoiceCountPromise,
            customerCountPromise,
            invoicesStatusPromise
        ]);
        const numberOfInvoices = Number(data[0][0].count ?? '0');
        const numberOfCustomers = Number(data[1][0].count ?? '0');
        const totalPaidInvoices = formatCurrency(data[2][0].paid ?? '0');
        const totalPendingInvoices = formatCurrency(data[2][0].pending ?? '0');
        return {
            numberOfInvoices,
            numberOfCustomers,
            totalPaidInvoices,
            totalPendingInvoices
        };
    }catch(error){
        console.log('Database Error: ', error);
        throw new Error('Failed to fetch the card data');
    }
}

