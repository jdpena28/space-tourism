import Link from "next/link";
import data from "@/data.json";
import { useRouter } from "next/router";
import React from "react";

const SliderLink: React.FC<SliderLinkProps> = ({ route, num }) => {
  const { asPath } = useRouter();

  return (
    <Link href={route}>
      <div
        className={`h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-heading4 leading-[80px] hover:border-white ${
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
    <div className="items-center justify-center gap-x-4 space-y-4 lg:flex lg:space-y-0">
      {data.technology.map((item, index) => {
        return (
          <SliderLink
            route={`${item.name.replace(" ", "-").toLowerCase()}`}
            num={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Slider;
