import { useRouter } from "next/router";

import { authService } from "@/common/fbase";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="
gnb flex-shrink-0 h-10 min-h-10 flex items-center justify-between
bg-[#475e63] text-[#f5feff]
"
    >
      <div className="flex items-center relative">
        <div
          className="h-full px-4 cursor-pointer"
          onClick={() => {
            authService.signOut();
            router.push("/");
          }}
        >
          <FiLogOut />
        </div>
        {/* <Image
          src={"/"}
          alt="avatar"
          width={20}
          height={20}
          className="img mx-2 rounded-full bg-white object-contain"
        />
        <span>유저이름</span> */}
      </div>
      <span className="absolute left-1/2 -translate-x-1/2">포켓몬 뽑기</span>
      <div></div>
    </header>
  );
}
