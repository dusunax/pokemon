import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/news">라우트 이동</Link>
    </>
  );
}

export default HomePage;
