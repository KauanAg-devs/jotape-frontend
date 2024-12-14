import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.picture;
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.image = profile.image;
      }
      return token;
    },
    redirect({url, baseUrl}){
      return baseUrl
    }
  },

  session: {
    strategy: 'jwt', 
  },
  pages: {
    signIn: '/signup',
  },
  debug: true,
});

export { handler as GET, handler as POST };
