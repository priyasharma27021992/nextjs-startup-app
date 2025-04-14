import { Suspense } from "react";
import LoginForm from "./ui/LoginForm";
import styles from '@/app/ui/home.module.css';
import { lusitana } from "@/app/ui/fonts";

export default function LoginPage(){
    return (
        <main className="flex items-center justify-center md:h-screen">
            <p className={`${lusitana.className}${styles.shape}`}>Login Page</p>
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <Suspense>
                    <LoginForm/>
                </Suspense>
            </div>
        </main>
    )
}
