import Head from "next/head";
import { useRouter } from "next/router";

import Auth from "@/components/auth/Auth";
import Main from "@/components/main/Main";

export default function Home({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();
  if (isLoggedIn) router.push("/pokemon");

  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <main>
        {!isLoggedIn && (
          <>
            <Auth />
          </>
        )}

        <>&copy; {new Date().getFullYear()}</>
      </main>
    </>
  );
}
