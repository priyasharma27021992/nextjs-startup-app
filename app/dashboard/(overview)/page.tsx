import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data';
import { Card } from '../ui/Card';
import { LatestInvoices } from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana } from '../ui/fonts';
import {
	BanknotesIcon,
	ClockIcon,
	CreditCardIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';

const DashBoard = async () => {
	const revenue = await fetchRevenue();
	const latestInvoices = await fetchLatestInvoices();
	const {
		numberOfInvoices,
		numberOfCustomers,
		totalPaidInvoices,
		totalPendingInvoices,
	} = await fetchCardData();
	console.log('baby latestInvoices', latestInvoices);
	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className='flex flex-row justify-between'>
				<Card
					title='Collected'
					icon={BanknotesIcon}
					value={totalPaidInvoices}
				/>
				<Card
					title='Pending'
					icon={ClockIcon}
					value={totalPendingInvoices}
				/>
				<Card
					title='Total Invoices'
					icon={CreditCardIcon}
					value={numberOfInvoices}
				/>
				<Card
					title='Total Customers'
					icon={UserGroupIcon}
					value={numberOfCustomers}
				/>
			</div>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'></div>
			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<RevenueChart revenue={revenue} />
				<LatestInvoices latestInvoices={latestInvoices} />
			</div>
		</main>
	);
};

export default DashBoard;
