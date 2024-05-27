import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-16">{children}</div>
        <div className="fixed bottom-0 left-0 w-full  bg-slate-100 py-2">
          <a
            href="https://buildship.com/"
            className="flex justify-center items-center"
          >
            <p className="text-secondary-foreground">Powered by </p>{" "}
            <Image
              src="/logo.webp"
              width={25}
              height={25}
              alt="BuildShip logo"
            />
            <p>BuildShip</p>
          </a>
        </div>
      </body>
    </html>
  );
}
