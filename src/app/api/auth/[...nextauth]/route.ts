import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log('teste');

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("Callback: session chamado");
      console.log("Session:", session);
      console.log("Token:", token);
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.picture;
      return session;
    },
    async jwt({ token, account, profile }) {
      console.log("Callback: jwt chamado");
      console.log("Token inicial:", token);
      console.log("Account:", account);
      console.log("Profile:", profile);
  
      if (account && profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.image = profile.image;
      }
      console.log("Token final:", token);
      return token;
    },
    redirect({url, baseUrl}){
      return baseUrl
    }
  },

  session: {
    strategy: 'jwt', // Usa JWT para gerenciar as sessões
  },
  pages: {
    signIn: '/signup', // Página de login personalizada
  },
  debug: true, // Ativa logs detalhados
});

export { handler as GET, handler as POST };
