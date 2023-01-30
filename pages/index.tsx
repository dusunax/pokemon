import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <main style={{ height: "100vh", textAlign: "center" }}>
        <h1>hello world!</h1>
      </main>
    </>
  );
}
