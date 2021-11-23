import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="A mini encyclopedia of Pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <header className={styles.header}>
        <h1>Pokedex</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
