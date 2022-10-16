import Head from "next/head";
import Link from "next/link";

import NewsList from "../../models/newsList";

const NewsPage: React.FC<{ newsList: NewsList[] }> = ({ newsList }) => {
  return (
    <>
      <Head>
        <title>홈페이지</title>
        <meta name="description" content="엄청난 서브 페이지" />
      </Head>

      <h1>NewsPage</h1>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <Link href={`news/${news.title}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const newsList: NewsList[] = [
    { id: "n1", title: "news1", desc: "news desc1" },
    { id: "n2", title: "news2", desc: "news desc2" },
    { id: "n3", title: "news3", desc: "news desc3" },
  ];

  return {
    props: {
      newsList: newsList,
    },
    revalidate: 3600,
  };
}

export default NewsPage;
