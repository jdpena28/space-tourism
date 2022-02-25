import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const TextLink: React.FC<TextLinkProps> = ({ navCount, navText }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/">
      <div className="cursor-pointer space-x-2 border-b-2 border-transparent py-4  hover:border-gray-400  active:border-white">
        <span className="font-bold">{navCount}</span>
        <span className="text-navText font-thin">{navText}</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const data = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
  return (
    <nav className="relative flex items-center justify-between pt-3 pl-6 font-secondary">
      <Image src="/assets/shared/logo.svg" height={48} width={48} />
      <div className="z-30 -mr-40  h-[1px] w-[40%] bg-[#979797]" />
      <div className="z-20 flex w-[50%] justify-center gap-x-6 bg-white/10 backdrop-blur-md">
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
