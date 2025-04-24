import { fetchCardData } from '@/app/lib/data';
import { Card } from '../Card';
import {
	BanknotesIcon,
	ClockIcon,
	CreditCardIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';

const CardsWrapper = async () => {
	const {
		numberOfInvoices,
		numberOfCustomers,
		totalPaidInvoices,
		totalPendingInvoices,
	} = await fetchCardData();
	return (
		<>
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
		</>
	);
};

export { CardsWrapper };
