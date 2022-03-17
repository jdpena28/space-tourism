import Link from "next/link";
import data from "@/data.json";
import { useRouter } from "next/router";
import React from "react";
import { nanoid } from "nanoid";

const SliderLink: React.FC<SliderLinkProps> = ({ route, num }) => {
  const { asPath } = useRouter();

  return (
    <Link href={route}>
      <div
        className={`h-[40px] w-[40px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-lg leading-[38px] hover:border-white md:h-[58px] md:w-[58px] md:text-heading4 md:leading-[58px] ${
          asPath === `/technology/${route}`
            ? "border-none bg-white text-black"
            : ""
        }`}>
        {num}
      </div>
    </Link>
  );
};

const Slider = () => {
  return (
    <div className="flex items-center justify-center gap-x-4 lg:flex-col lg:gap-y-4">
      {data.technology.map((item, index) => {
        return (
          <SliderLink
            key={nanoid()}
            route={`${item.name.replace(" ", "-").toLowerCase()}`}
            num={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Slider;
