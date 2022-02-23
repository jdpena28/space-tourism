import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const TextLink: React.FC<TextLinkProps> = ({ navCount, navText }) => {
  return (
    <Link href="/">
      <div>
        <span className="ml-2 font-bold">{navCount}</span>
        <span className="text-navText">{navText}</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const data = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
  return (
    <nav className="flex w-full items-center justify-around">
      <Image src="/assets/shared/logo.svg" height={48} width={48} />
      <div className="flex">
        {data.map((item, count) => {
          return (
            <TextLink key={nanoid()} navCount={`0${count++}`} navText={item} />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
