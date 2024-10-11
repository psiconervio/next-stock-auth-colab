import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbardown from "@/components/Navbardown";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estacion Metereologica",
  description: "nodo tec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {/* <Navbardown/> */}
        {children}
      </body>
    </html>
  );
}
