import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <nav className="flex flex-col">
      <Link href="/">
        <a className="flex items-center">
          <HomeIcon className="w-8 h-8 text-gray-200" />
          <span className="ml-4 text-lg text-gray-200">Home</span>
        </a>
      </Link>
    </nav>
  );
}
