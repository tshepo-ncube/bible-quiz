import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenTuition",
  description: "For UCT students and donors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navbar isHome={true} />

   
      <br />
      <br />
      <br />

      <body className={inter.className}>{children}</body> */}

      <GoogleAnalytics />

      <body>{children}</body>
    </html>
  );
}
