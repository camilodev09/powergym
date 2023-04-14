import Banner from "@/components/Banner";
import Carrousel from "@/components/Carrousel";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

import Services from "@/components/Services";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Form />
      <Services />

      <Carrousel />
      <Footer />
    </main>
  );
}
