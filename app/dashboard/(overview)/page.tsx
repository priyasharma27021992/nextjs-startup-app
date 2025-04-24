import { LatestInvoices } from '@/app/ui/dashboard/latest-invoices';
import { RevenueChart } from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '../../ui/fonts';
import { Suspense } from 'react';
import {
	CardsSkeleton,
	LatestInvoicesSkeleton,
	RevenueSkeleton,
} from '@/app/ui/skeletons';
import { CardsWrapper } from '@/app/ui/dashboard/cards';

const DashBoard = () => {
	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className='flex flex-row justify-between'>
				<Suspense fallback={<CardsSkeleton />}>
					<CardsWrapper />
				</Suspense>
			</div>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'></div>
			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<Suspense fallback={<RevenueSkeleton />}>
					<RevenueChart />
				</Suspense>
				<Suspense fallback={<LatestInvoicesSkeleton />}>
					<LatestInvoices />
				</Suspense>
			</div>
		</main>
	);
};

export default DashBoard;
