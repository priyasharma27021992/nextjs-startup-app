import { fetchFilteredInvoices } from '@/app/lib/data';

export const InvoicesTable = ({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) => {
	const invoices = fetchFilteredInvoices(query, currentPage);
	return (
		<div className='mt-6 flow-root'>
			<div className='inline-block min-w-full align-middle'>
				<div className='rounded-lg'></div>
			</div>
		</div>
	);
};
