import "./globals.css";
import Providers from "./provider";
import { StatusProvider } from "./StatusContext";
import ThemeRegistry from "./ThemeRegistry";
import { LeagueProvider } from "@/Context/LeagueContext";
import { Toaster } from "@/components/ui/sonner"

import { Be_Vietnam_Pro } from 'next/font/google';
import "leaflet/dist/leaflet.css";

// import localFont from "next/font/local"

// district app
const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// const miletus = localFont({
//   src: "../public/fonts/MiletusGrotesk.woff2",
//   variable: "--font-miletus",
// });

export const metadata = {
  title: "Optimizely Project",
  description: "Project for Optimizely Frontend Engineer Role",
}

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
