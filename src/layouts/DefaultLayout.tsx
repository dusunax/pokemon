import React from "react";
import Header from "@/layouts/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen sm:px-4 md:px-0 sm:py-5 md:py-4 flex flex-col justify-between items-center bg-gradient-to-b from-[#49a5b5] to-[#244952]">
      <div className="w-full md:max-w-md flex-1 sm:rounded-lg flex flex-col justify-between drop-shadow-xl scroll-p-2 overflow-y-scroll  scrollbar-hide overflow-x-hidden scroll bg-gradient-to-b from-red via-[#244952] to-light-blue">
        <Header />
        {children}
      </div>
    </div>
  );
};
