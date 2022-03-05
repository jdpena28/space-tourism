import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { route } from "next/dist/server/router";

const TextLink: React.FC<TextLinkProps> = ({ navCount, navText, navLink }) => {
  const { pathname } = useRouter();
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={navLink}>
      <div
        className={`cursor-pointer space-x-2 border-b-2 border-transparent py-4  hover:border-gray-400  ${
          pathname.includes(navText.toLowerCase()) ? "border-white" : ""
        }`}>
        <span className="font-bold">{navCount}</span>
        <span className="text-navText font-thin">{navText}</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const { asPath } = useRouter();
  const data = [
    {
      text: "DESTINATION",
      link: "/destination/moon",
    },
    {
      text: "CREW",
      link: "/crew/douglas-hurley",
    },
    {
      text: "TECHNOLOGY",
      link: "/technology/launch-vehicle",
    },
  ];
  return (
    <nav className="absolute flex w-full items-center justify-between pt-3 pl-6 font-secondary">
      <Image src="/assets/shared/logo.svg" height={48} width={48} />
      <div className="z-30 -mr-40 h-[1px]  w-[40%] bg-[#979797] lg:hidden" />
      <div className="z-20 flex w-[50%] justify-center gap-x-6 bg-white/10 backdrop-blur-md lg:w-max lg:pl-4 lg:text-sm">
        <Link href="/">
          <div
            className={`cursor-pointer space-x-2 border-b-2 border-transparent py-4  hover:border-gray-400 ${
              asPath === "/" ? "border-white" : ""
            }`}>
            <span className="font-bold">00</span>
            <span className="text-navText font-thin">HOME</span>
          </div>
        </Link>
        {data.map((item, count) => {
          return (
            <TextLink
              key={nanoid()}
              isActive={item.link}
              navCount={`0${count++}`}
              navText={item.text}
              navLink={item.link}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
