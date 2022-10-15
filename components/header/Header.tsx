import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <nav>
        헤더
        <ul>
          <li onClick={() => router.push("/")} role="button" tabIndex={0}>
            홈버튼
          </li>
          <li role="button" tabIndex={0}>
            소개
          </li>
          <li role="button" tabIndex={0}>
            블로그
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
