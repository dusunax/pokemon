import Image from "next/image";
import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen sm:px-4 md:px-0 sm:py-5 md:py-4 flex flex-col justify-between items-center bg-gradient-to-b from-[#49a5b5] to-[#244952]">
      <div className="w-full md:max-w-md flex-1 sm:rounded-lg flex flex-col justify-between drop-shadow-xl scroll-p-2 overflow-y-scroll  scrollbar-hide overflow-x-hidden scroll bg-red">
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
        {children}
      </div>
    </div>
  );
};
