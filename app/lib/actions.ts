'use server';

import { signIn } from "@/auth";

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try{
        await signIn('credentials', formData);
    }catch(error){
        // if(error){
        //     switch(error.type){
        //         case 'CredentialsSignin':
        //             return 'Invalid credentials.';
        //         default:
        //             return 'Something went wrong.';
        //     }
        // }
        throw error;
    }
}