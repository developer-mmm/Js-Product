import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        

        <Navbar />

        <main className="align-elements mt-10">{children}</main>
      </body>
    </html>
  );
}
