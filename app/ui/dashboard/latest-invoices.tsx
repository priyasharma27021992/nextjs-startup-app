import { LatestInvoice } from '@/app/lib/definitions';
import { lusitana } from '../fonts';
import Image from 'next/image';

const LatestInvoices = ({
	latestInvoices,
}: {
	latestInvoices: LatestInvoice[];
}) => {
	return (
		<div className='w-full md:col-span-4'>
			<h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Latest Invoices
			</h2>
			<div className='rounded-xl bg-gray-50 p-4'>
				<div className='flex justify-between'>
					{latestInvoices.map((latestInvoice) => (
						<div
							key={latestInvoice.id}
							className='flex justify-between'>
							<div>
								<Image
									src={latestInvoice.image_url}
									alt={latestInvoice.name}
									className='mr-4 rounded-full'
									width={32}
									height={32}
								/>
								<div>
									<div>{latestInvoice.name}</div>
									<div>{latestInvoice.email}</div>
								</div>
							</div>
							<div>{latestInvoice.amount}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export { LatestInvoices };
