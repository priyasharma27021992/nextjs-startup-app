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