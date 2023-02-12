import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen sm:px-4 md:px-0 sm:py-4 md:py-0 flex justify-center items-center bg-stone-200">
      <div className="w-full px-6 sm:px-10 md:max-w-md h-full md:max-h-common sm:rounded-lg drop-shadow-xl scroll-p-2 overflow-y-scroll overflow-x-hidden bg-white">
        {children}
      </div>
    </div>
  );
};
