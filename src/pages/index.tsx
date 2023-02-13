import Head from "next/head";
import { useRouter } from "next/router";

import Auth from "@/components/auth/Auth";
import Main from "@/components/main/Main";

import { userProps } from "@/models/user";

export default function Home({ isLoggedIn, userObj }: Partial<userProps>) {
  const router = useRouter();
  if (isLoggedIn) router.push("/pokemon");

  return (
    <>
      <Head>
        <title>홈</title>
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
