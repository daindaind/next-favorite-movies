import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/layouts/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p>Home Page</p>
    </main>
  );
}
