import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Devstream",
    description: "App for devstream homepage",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const singleWhiteSpace = " ";
    return (
        <html lang="en">
            <body className={inter.className + singleWhiteSpace + "min-h-svh bg-dark-base text-white scroll-smooth"}>
                {children}
            </body>
        </html>
    );
}
