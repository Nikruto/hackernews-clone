import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useFirstMountState } from "react-use";

export default function Header() {
  const isFirstMount = useFirstMountState();
  const router = useRouter();
  const [searchText, setSearchText] = useState(router.query.search || "");

  const onChangeSearchText = (text) => {
    if (text === "") delete router.query.search;
    else router.query.search = encodeURI(text);

    router.push(router);
  };

  useEffect(() => {
    if (!isFirstMount) {
      const timeOutId = setTimeout(() => onChangeSearchText(searchText), 500);
      return () => clearTimeout(timeOutId);
    }
  }, [searchText]);

  return (
    <header className="flex py-2 md:py-6 items-center">
      <div className="sm:mr-10 md:mr-0 md:w-56">
        <Link href="/">
          <a className="flex items-center flex-shrink-0">
            <div className="w-8 h-8 md:w-14 md:h-14 relative mr-2">
              <Image src="/logo.png" layout="fill" />
            </div>

            <div className="leading-none text-lg hidden md:block">
              Search
              <br />
              Hacker News
            </div>
          </a>
        </Link>
      </div>
      <div className="flex-1">
        <div className="relative group">
          <SearchIcon className="w-6 h-6 absolute top-1/2 left-4 transform -translate-y-1/2 opacity-50 group-focus-within:opacity-100 transition" />
          <input
            type="text"
            className="w-full h-12 md:h-16 pl-12 rounded bg-dark outline-none"
            placeholder="Search stories by title, url or author"
            value={searchText}
            onInput={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
