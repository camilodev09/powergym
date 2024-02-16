import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSInitializer from "./provider/AOSInitializer";
import Nav from "@/components/Nav";
import WhatsAppLink from "@/components/WhatsAppLink";
import Head from 'next/head';
import favicon from "@/public/assets/favicon.ico"




export const metadata = {
  title: 'PowerGym',
};


export default function RootLayout({ children }) {

 

  return (
    <html lang="en">

      <Head>
        <link rel="shortcut icon" href={favicon} />
      </Head>

      <body className="w-full h-auto scrollbar-hide">
        <AOSInitializer>
        <Nav />
        <WhatsAppLink/>
        {children}
        </AOSInitializer>
      </body>
    </html>
  );
}
