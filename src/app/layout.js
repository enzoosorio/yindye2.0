import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { EdgeStoreProvider } from "@/lib/edgeStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YinDye",
  description: "Con YinDye encontrarás inspiración, emoción y gratitud para poder seguir experimentando cosas nuevas cada día. Nos enfocamos en la experiencia de ustedes y queremos resaltar lo más importante, dando a conocer nuevas formas y estilos de arte, ya que cada uno tiene su estilo único, y eso es lo que hace interesante al mundo del arte.",

};

export default async function RootLayout({ children }) {

  const session = await auth()

  return (
    <html lang="en" className="overflow-x-hidden">
      <SessionProvider session={session}>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${inter.className} overflow-x-hidden`}>
          <Navbar session={session} />
          <EdgeStoreProvider>
            <ToastContainer />
            {children}
          </EdgeStoreProvider>
          <hr className="mt-10 xl:w-[1080px] mx-auto" />
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
