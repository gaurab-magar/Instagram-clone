import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurab Insta",
  description: "Instagram Clone created by Gaurab Magar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
