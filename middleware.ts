import NextAuth from "next-auth";
import { authConfig } from "@/auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg|.*\\.jpg|.*\\.ico|.*\\.json|sw.js).*)",
  ],
};
