import Header from "../../organisms/header/header";
import React from "react";

const Layout: React.FC<{}> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
