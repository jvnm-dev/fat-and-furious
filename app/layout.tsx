import type { Metadata } from "next";
import Link from "next/link";
import {
  LiaDumbbellSolid,
  LiaChartBarSolid,
  LiaCogSolid,
} from "react-icons/lia";

import "@/lib/prisma";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { bebas, roboto } from "@/lib/fonts/fonts";

import "@/lib/styles/globals.css";

const APP_NAME = "Fat and Furious";
const APP_DEFAULT_TITLE = "Fat and Furious";
const APP_TITLE_TEMPLATE = "%s - Fat and Furious";
const APP_DESCRIPTION = "An app to help you make your fat disappear";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authInfo = await auth();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          roboto.variable,
          bebas.variable,
        )}
      >
        <div className="h-[calc(100vh-58px)]">{children}</div>

        {!!authInfo?.user && (
          <nav className="w-screen">
            <div className="flex justify-between items-center border-primary border-t-2">
              <Link
                href="/dashboard"
                className="flex-1 p-4 text-black bg-primary flex justify-center"
              >
                <LiaDumbbellSolid className="text-2xl" />
              </Link>
              <Link
                href="/profile"
                className="flex-1 p-4 text-white bg-black flex justify-center"
              >
                <LiaChartBarSolid className="text-2xl" />
              </Link>
              <Link
                href="/settings"
                className="flex-1 p-4 text-white bg-black rounded-tr-md flex justify-center"
              >
                <LiaCogSolid className="text-2xl" />
              </Link>
            </div>
          </nav>
        )}
      </body>
    </html>
  );
}
