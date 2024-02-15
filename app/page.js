import Banner from "@/components/Banner";
import Carrousel from "@/components/Carrousel";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Gymvideo from "@/components/Gymvideo";

import Services from "@/components/Services";
import UseGym from "@/components/UseGym";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Form />
      <Services />
      <Gymvideo />
      <Carrousel />
      <UseGym/>
      <Footer />
    </main>
  );
}
