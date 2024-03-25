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
        <div className="flex justify-center md:justify-end">
          <div className="flex flex-col items-center">
            <h1 className="m-4 w-min text-5xl text-neutral-800 font-bold p-6 border-2 border-neutral-600">
              Relaxation <br />
              self coach
            </h1>
            <a href="mailto:relaxationselfcoach@gmail.com">
              relaxationselfcoach@gmail.com
            </a>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
