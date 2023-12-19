import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snehasish | Portfolio",
  description: "Created by Snehasish Dey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="icon"  href="./favicon.ico" className="w-auto h-auto rounded-full" sizes="any"/> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
