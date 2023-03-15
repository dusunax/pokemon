import Head from "next/head";
import { useRouter } from "next/router";

import Auth from "@/components/auth/Auth";

import { userProps } from "@/models/user";
import Image from "next/image";

export default function Home({ isLoggedIn, userObj }: Partial<userProps>) {
  const router = useRouter();
  if (isLoggedIn) router.push("/pokemon");

  return (
    <>
      <Head>
        <title>포켓몬 뽑기</title>
        <meta name="og:title" content="포켓몬 뽑기" />
        <meta
          name="og:description"
          content="1분 마다 포켓몬을 뽑는 프로젝트입니다."
        />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
        <link rel="icon" href="/assets/icons/favicon.ico"></link>
      </Head>
      <main>
        {!isLoggedIn ? <Auth /> : <></>}

        <div className="text-center mt-auto">
          &copy; {new Date().getFullYear()}
        </div>
      </main>
    </>
  );
}
