import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const authOptions = {
    providers: [GitHub({ clientId: process.env.AUTH_GITHUB_ID as string, clientSecret: process.env.AUTH_GITHUB_SECRET as string })],
  };

  
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };