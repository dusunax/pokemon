import Header from "../../molecules/header/Header";
import React from "react";

const Layout: React.FC<{ items: string[] }> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
