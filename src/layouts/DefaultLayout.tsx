import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen sm:px-4 md:px-0 sm:py-5 md:py-0 flex justify-center items-center bg-gradient-to-b from-[#49a5b5] to-[#244952]">
      <div className="w-full md:max-w-md h-full md:max-h-common sm:rounded-lg drop-shadow-xl scroll-p-2 overflow-y-scroll  scrollbar-hide overflow-x-hidden scroll bg-red">
        {children}
      </div>
    </div>
  );
};
