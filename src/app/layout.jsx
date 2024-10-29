import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Concern WorldWide",
  description: "Genarated By MD Emaran Ali ::  Partho Sen",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="mx-auto mt-5 bg-[#def1ef]">
        {children}
      </body>
    </html>
  );
}
