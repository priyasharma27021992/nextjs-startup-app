import React from 'react';

const Card = ({ title, icon, value }) => {
	const Icon = icon;
	return (
		<div className='rounded-xl bg-gray-50 p-2'>
			<div className='flex flex-row text-sm p-2'>
				<Icon className='w-4' />
				<p className='text-sm'>{title}</p>
			</div>
			<div className='flex items-center justify-center bg-white p-6'>
				<p>{value}</p>
			</div>
		</div>
	);
};

export { Card };
