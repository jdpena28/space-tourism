import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const TextLink: React.FC<TextLinkProps> = ({ navCount, navText, navLink }) => {
  const { pathname } = useRouter();
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={navLink}>
      <div
        className={`cursor-pointer space-x-2 border-b-2 border-transparent py-7  hover:border-gray-400  ${
          pathname.includes(navText.toLowerCase()) ? "border-white" : ""
        }`}>
        <span className="hidden font-bold lg:inline">{navCount}</span>
        <span className="text-navText font-thin">{navText}</span>
      </div>
    </Link>
  );
};
const MobileLink: React.FC<TextLinkProps> = ({
  navCount,
  navText,
  navLink,
}) => {
  const { pathname } = useRouter();
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={navLink}>
      <div
        className={`cursor-pointer space-x-2   ${
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-5">
      <Image src="/assets/shared/logo.svg" height={48} width={48} />
      {/*  mobile menu */}
      {isOpen ? (
        <svg
          role="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="z-50 cursor-pointer fill-current text-highlight md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      ) : (
        <svg
          className="cursor-pointer fill-current text-highlight md:hidden"
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      )}
      {isOpen && (
        <div className="absolute right-0 top-0 z-40 h-screen w-[70%] bg-white/10 backdrop-blur-lg">
          <div className="flex h-[70%] flex-col justify-center gap-y-8 pl-16">
            <Link href="/">
              <div
                className={`cursor-pointer space-x-2 ${
                  asPath === "/" ? "border-white" : ""
                }`}>
                <span className="font-bold">00</span>
                <span className="text-navText font-thin">HOME</span>
              </div>
            </Link>
            {data.map((item, count) => {
              return (
                <MobileLink
                  key={nanoid()}
                  isActive={item.link}
                  navCount={`0${count + 1}`}
                  navText={item.text}
                  navLink={item.link}
                />
              );
            })}
          </div>
        </div>
      )}
      {/* Tablet and Desktop Menu */}
      <div className="absolute  right-0 top-0 z-20  hidden w-max  justify-center gap-x-6 bg-white/10 px-6 backdrop-blur-md md:flex lg:static">
        <div className="absolute top-0 bottom-0 -left-[97%] z-30 m-auto hidden  h-[1px] w-full bg-[#979797] lg:block" />
        <Link href="/">
          <div
            className={`cursor-pointer space-x-2 border-b-2 border-transparent py-7  hover:border-gray-400 ${
              asPath === "/" ? "border-white" : ""
            }`}>
            <span className="hidden font-bold lg:inline">00</span>
            <span className="text-navText font-thin">HOME</span>
          </div>
        </Link>
        {data.map((item, count) => {
          return (
            <TextLink
              key={nanoid()}
              isActive={item.link}
              navCount={`0${count + 1}`}
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
