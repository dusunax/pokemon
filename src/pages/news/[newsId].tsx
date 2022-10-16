import Head from "next/head";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <>
      <Head>
        <title>{newsId}</title>
        <meta name="description" content="엄청난 컨텐츠" />
      </Head>
      <h1>DetailPage / {newsId}</h1>;
    </>
  );
}

export default DetailPage;
