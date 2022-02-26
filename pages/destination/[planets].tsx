import React, { useEffect, useState } from "react";
import data from "@/data.json";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from "@/layout/Layout";
import Tabs from "@/components/Tabs";
import { useRouter } from "next/router";

const Planets: NextPage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<dataProps | undefined>();

  const findPlanet = (planet: string | string[] | undefined) => {
    return data.destinations.find((i) => i.name.toLowerCase() === planet);
  };

  useEffect(() => {
    setDatas(findPlanet(router.query.planets));
    console.log(datas);
  }, [router.query.planets]);

  return (
    <Layout
      id={datas?.name.toLowerCase()}
      className="containers m-auto flex h-full items-center justify-around">
      <div className="mt-8 space-y-6">
        <p className="mb-6 font-secondary text-heading5">
          <span className="font-bold text-slate-500">01</span>&ensp;PICK YOUR
          DESTINATION
        </p>
        <Image
          src={
            datas ? datas.images.webp : "/assets/destination/image-moon.webp"
          }
          priority
          height={445}
          width={445}
        />
      </div>
      <div className="">
        <Tabs />
        <h2 className="text-heading2">{datas?.name.toUpperCase()}</h2>
        <p className="w-96 font-tertiary">{datas?.description}</p>
        <div className="mt-12 h-[2px] w-full bg-[#383B4B]" />
        <br />
        <div className="flex gap-x-10 text-subheading1">
          <div>
            <p className="font-secondary text-subheading2">AVG. DISTANCE</p>
            <p className="uppercase">{datas?.distance}</p>
          </div>
          <div>
            <p className="font-secondary text-subheading2">EST. TRAVEL TIME</p>
            <p className="uppercase">{datas?.travel}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Planets;
