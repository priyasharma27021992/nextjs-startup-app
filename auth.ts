import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";
// import Credentials from "next-auth/providers/credentials";
// import { z } from 'zod';
// import postgres from "postgres";
// import bcrypt from "bcrypt";
import GitHub from "next-auth/providers/github"

// const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

// async function getUser(email: string): Promise<User | undefined> {
//    try{
//         const user = await sql<User[]>`SELECT * from users WHERE email=${email}`;
//         return user[0];
//    }catch(error){
//         console.error('Failed to fetch user: ', error);
//         throw new Error('Failed to fetch user');
//    }
// }

// export const {auth, signIn, signOut} = NextAuth({
//     ...authConfig,
//     providers: [Credentials({
//         async authorize(credentials){
//             const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6)})
//                 .safeParse(credentials);
            
//             if(parsedCredentials.success){
//                 const { email, password } = parsedCredentials.data;
//                 const user = await getUser(email);
//                 if(!user) return null;
//                 const passwordMatch = await bcrypt.compare(password, user.password);

//                 if(passwordMatch) return user;
//             }
//             return null;
//         },
//     }),
//     ],
// });

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({ clientId: process.env.AUTH_GITHUB_ID as string, clientSecret: process.env.AUTH_GITHUB_SECRET as string })],
});

