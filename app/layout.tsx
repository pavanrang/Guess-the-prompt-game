import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image prompt guesser",
  description: "Guess the prompt",
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
          
            <p className="text-secondary-foreground">Pavan </p>
            
        </div>
      </body>
    </html>
  );
}
