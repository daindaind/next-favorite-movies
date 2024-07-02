import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/layouts/HomeLayout";
import FirstUI from "@/components/home/FirstUI";
import SecondUI from "@/components/home/SecondUI";
import ThirdUI from "@/components/home/ThirdUI";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <FirstUI />
      <SecondUI />
      <ThirdUI />
    </main>
  );
}
