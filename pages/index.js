import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import NewsList from "../components/newslist";
import { useState } from "react";

export default function Home({ hits }) {
  return (
    <div className="min-h-screen bg-darker text-white">
      <Head>
        <title>HackerNews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl md:px-4 mx-auto">
        <div className="px-2 md:px-0">
          <Header />
        </div>
        <div className="flex py-4">
          <div className="hidden md:block w-56 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex-1">
            <NewsList news={hits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const fetchUrl = context.query.search
    ? `http://hn.algolia.com/api/v1/search?query=${encodeURI(
        context.query.search
      )}&tags=story`
    : "https://hn.algolia.com/api/v1/search?tags=front_page";

  const response = await fetch(fetchUrl);
  const json = await response.json();

  return {
    props: {
      hits: json.hits,
    },
  };
}
