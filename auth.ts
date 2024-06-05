import NextAuth, { type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnSignin = nextUrl.pathname.startsWith("/signin");

      if (isSignedIn && isOnSignin) {
        const callbackUrl =
          nextUrl.searchParams.get("callbackUrl") ??
          new URL("/dashboard", nextUrl);
        const pathnameOfCallbackUrl = new URL(callbackUrl).pathname;
        const newPathname =
          pathnameOfCallbackUrl === "/" ? "/dashboard" : pathnameOfCallbackUrl;

        return Response.redirect(new URL(newPathname, nextUrl));
      }

      return isSignedIn;
    },
    async signIn({ profile, account }) {
      if (account?.provider === "google" && !!profile?.email) {
        const user = await prisma.user.findFirst({
          where: {
            email: profile.email,
          },
        });
        return !!user;
      }
      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  signIn,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
