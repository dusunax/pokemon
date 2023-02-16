import { NextPageContext } from "next";
import Error from "next/error";
import Head from "next/head";

interface ErrorProps {
  statusCode: number;
}

const CustomError = ({ statusCode }: ErrorProps) => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Error statusCode={statusCode} />
    </>
  );
};

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }
  return { statusCode };
};

export default CustomError;
