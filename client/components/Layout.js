import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.onRouteChangeStart = function () {
  NProgress.start();
};
Router.onRouteChangeComplete = function () {
  NProgress.done();
};

const Layout = ({ children }) => {
  const head = () => {
    return (
      <>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link href='/static/css/styles.css' rel='stylesheet' />
      </>
    );
  };

  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark" href="">
            Home
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-dark" href="">
            Login
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-dark" href="">
            Register
          </a>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
    </>
  );
};

export default Layout;
