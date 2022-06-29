import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import { redirect } from "next/dist/server/api-utils";

export default NextAuth({

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRATE,
    }),
  ],
  pages:{
    signIn: "/auth/signin",
  }


})