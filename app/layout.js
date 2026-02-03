import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata = {
  title: "Anushka Dubey | Software Developer",
  description: "Portfolio of Anushka Dubey, a Software Developer specializing in Next.js and high-quality web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
