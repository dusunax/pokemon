import { useRouter } from "next/router";
import Link from "next/link";
import NavMenu from "../../molecules/nav-menu/nav-menu";

const Header = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="drop-down">아이콘</div>
      <NavMenu />

      <h3>기록하는 페이지: 프론트엔드 개발 일지</h3>
      <Link href="/">http://dusuna.shop</Link>
    </nav>
  );
};

export default Header;
