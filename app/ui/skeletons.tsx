//loading animation
const shimmer =
	'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export const CardSkeleton = () => {
	return (
		<div
			className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
			<div className='flex p-4'>
				<div className='h-5 w-5 rounded-md bg-gray-200'></div>
				<div className='ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium'></div>
			</div>
			<div className='flex items-center justify-center truncate rounded-xl bg-white px-4 py-8'>
				<div className='h-7 w-20 rounded-md bg-gray-200'></div>
			</div>
		</div>
	);
};

export const CardsSkeleton = () => {
	return (
		<>
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</>
	);
};

export const RevenueSkeleton = () => {
	return (
		<div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
			<div className='mb-4 h-8 w-40 rounded-md bg-gray-200'></div>
			<div className='flex flex-col rounded-md bg-gray-200 p-4'>
				<div className='h-100 bg-white rounded-md'></div>
				<div className='flex flex-row items-center pt-4 bg-gray-200'>
					<div className='rounded-full p-2 bg-gray-500'></div>
					<div className='rounded-xl ml-2 w-20 h-4 bg-gray-500'></div>
				</div>
			</div>
		</div>
	);
};

export const InvoiceSkeleton = () => {
	return (
		<>
			<div className='flex'>
				<div className='flex flex-row items-center justify-between w-full'>
					<div className='flex flex-row items-center'>
						<div className='bg-gray-200 rounded-full p-2'></div>
						<div className='ml-2'>
							<p className='bg-gray-200 rounded-md w-20 h-2 mb-2'></p>
							<p className='bg-gray-200 rounded-md w-10 h-1.5'></p>
						</div>
					</div>
					<div>
						<p className='bg-gray-200 rounded-md w-5 h-2'></p>
					</div>
				</div>
			</div>
			<div className='w-full bg-gray-200 h-1'></div>
		</>
	);
};

export const LatestInvoicesSkeleton = () => {
	return (
		<div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
			<div className='mb-4 h-8 w-40 rounded-md bg-gray-200'></div>
			<div className='p-4 bg-gray-200 rounded-xl'>
				<div className='flex flex-col justify-between rounded-md bg-white p-4 h-100'>
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<div></div>
					<div className='bg-gray-200 h-2'></div>
				</div>
			</div>
		</div>
	);
};

export const DashboardSkeleton = () => {
	return (
		<>
			<div
				className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
			/>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<RevenueSkeleton />
				<LatestInvoicesSkeleton />
			</div>
		</>
	);
};
