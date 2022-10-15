import Link from "next/link";

function NewsPage() {
  const newsList = [
    { title: "news1", desc: "news desc1" },
    { title: "news2", desc: "news desc2" },
    { title: "news3", desc: "news desc3" },
  ];
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        {newsList.map((news) => (
          <li>
            <Link href={`news/${news.title}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;
