import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FoodDash",
  description: "Delicious Food Delivered",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
