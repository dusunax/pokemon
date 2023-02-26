import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
gnb h-10 flex items-center justify-between
bg-[#475e63] text-[#49a5b5]
"
    >
      <div className="flex items-center relative">
        <Image
          src={"/"}
          alt="avatar"
          width={20}
          height={20}
          className="img mx-2 rounded-full bg-white object-contain"
        />
        <span>유저이름</span>
      </div>
      <span className="absolute left-1/2 -translate-x-1/2">제목</span>
      <div></div>
    </header>
  );
}
