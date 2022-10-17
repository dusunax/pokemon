import Header from "../../organisms/header/header";
import React from "react";

const Layout: React.FC<{}> = (props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-6">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
