'use client';
// import "./globals.css";
import { Inter } from "next/font/google";
import './boostrap.css';
import './globals.css';
import Sidebar from "./components/sidebar";
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WORKITOUT",
//   description: "Plataforma de servicios",
//   generator: "Next.js",
//   manifest: "/manifest.json",
//   keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
//   themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
//   authors: [
//     { name: "Sergio Sanguinetti" },
   
//   ],
//   viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
//   icons: [
//     { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
//     { rel: "icon", url: "icons/icon-128x128.png" },
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
    </html>
  );
}
