import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/components/Nav";
import WhatsAppLink from "@/components/WhatsAppLink";
import Head from 'next/head';
import favicon from "@/public/assets/favicon.svg"

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
        <Nav />
        <WhatsAppLink/>
        {children}
      </body>
    </html>
  );
}
