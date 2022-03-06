import React, { useEffect, useState } from "react";
import data from "@/data.json";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from "@/layout/Layout";
import Tabs from "@/components/Tabs";
import { useRouter } from "next/router";
import Subheading from "@/components/Subheading";
import { dataProps } from "@/types/main";

const Planets: NextPage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<dataProps | undefined>();

  const findPlanet = (planet: string | string[] | undefined) => {
    return data.destinations.find((i) => i.name.toLowerCase() === planet);
  };

  useEffect(() => {
    setDatas(findPlanet(router.query.planets));
  }, [router.query.planets]);

  return (
    <Layout
      id="planet"
      className="containers mx-auto flex h-screen items-center justify-around xl:h-max lg:flex-col">
      <div className="hidden lg:block">
        <Subheading num="01" text="PICK YOUR DESTINATION" />
      </div>
      <div className="mt-8 space-y-6 lg:mt-14">
        <Subheading
          num="01"
          text="PICK YOUR DESTINATION"
          className="lg:hidden"
        />
        <Image
          className="lg:pt-12"
          src={
            datas ? datas.images.webp : "/assets/destination/image-moon.webp"
          }
          priority
          height={445}
          width={445}
        />
      </div>
      <div className="lg:text-center">
        <Tabs />
        <h2 className="text-heading2">{datas?.name.toUpperCase()}</h2>
        <p className="w-96 font-tertiary">{datas?.description}</p>
        <div className="mt-12 h-[2px] w-full bg-[#383B4B]" />
        <br />
        <div className="flex gap-x-10 text-subheading1 lg:justify-around">
          <div>
            <p className="font-secondary text-subheading2 text-gray-400">
              AVG. DISTANCE
            </p>
            <p className="uppercase">{datas?.distance}</p>
          </div>
          <div>
            <p className="font-secondary text-subheading2 text-gray-400">
              EST. TRAVEL TIME
            </p>
            <p className="uppercase">{datas?.travel}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Planets;
