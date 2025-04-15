import { Suspense } from 'react';
import LoginForm from '../ui/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
	return (
		<main className='flex items-center justify-center md:h-screen'>
			<div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
				<Image
					src='/hero-desktop.png'
					width={1000}
					height={760}
					className='hidden md:block'
					alt='Screenshots of the dashboard project showing desktop version'
				/>
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	);
}
