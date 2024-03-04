import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relaxation self coach",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#f3fdfd]"}>
        <h1 className="ml-auto w-min text-5xl text-neutral-800 font-bold p-6 m-4 border-2 border-neutral-600">
          Relaxation <br />
          self coach
        </h1>
        {children}
      </body>
    </html>
  );
}
