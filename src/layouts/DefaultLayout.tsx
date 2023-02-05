import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen sm:px-4 md:px-0 sm:py-4 md:py-0 flex justify-center items-center bg-stone-200">
      <div className="w-full md:max-w-md h-full md:max-h-custom sm:rounded-lg drop-shadow-xl bg-white">
        {children}
      </div>
    </div>
  );
};
