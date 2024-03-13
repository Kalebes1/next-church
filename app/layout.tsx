import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adexp",
  description: "Assembléia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      
      <body className={inter.className}>
        <Modal isOpen title="Entrar"/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
