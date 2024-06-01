import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bible Game",
  description: "For bible quizzes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
