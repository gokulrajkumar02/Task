import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";
import { StatusProvider } from "./StatusContext";
import ThemeRegistry from "./ThemeRegistry";
import { LeagueProvider } from "@/Context/LeagueContext";
import { Toaster } from "@/components/ui/sonner"

import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={beVietnam.className}>
      <body className="flex w-full min-h-screen">
        <Providers>
          <LeagueProvider>
            <ThemeRegistry>
              <StatusProvider>{children}</StatusProvider>
                <Toaster />
            </ThemeRegistry>
          </LeagueProvider>
        </Providers>
      </body>
    </html>
  );
}
