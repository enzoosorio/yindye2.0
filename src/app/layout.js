import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YinDye",
  description: "Con YinDye encontrarás inspiración, emoción y gratitud para poder seguir experimentando cosas nuevas cada día. Nos enfocamos en la experiencia de ustedes y queremos resaltar lo más importante, dando a conocer nuevas formas y estilos de arte, ya que cada uno tiene su estilo único, y eso es lo que hace interesante al mundo del arte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        <hr className="mt-10 xl:w-[1080px] mx-auto" />
        <Footer />
      </body>
    </html>
  );
}
