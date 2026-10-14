import { Anton, Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const courier = Courier_Prime({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-courier",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
