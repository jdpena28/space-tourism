import Layout from "@/layout/Layout";
import Subheading from "@/components/Subheading";
import Tabs from "@/components/Tabs";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { planetProps } from "@/types/main";
import data from "@/data.json";

const Planet: NextPage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<planetProps | undefined>();
  const findPlanets = (routes: string | string[] | undefined) => {
    const planetInfo = data.destinations.find((i) => {
      return i.name.toLowerCase() === routes;
    });
    return planetInfo;
  };
  useEffect(() => {
    setDatas(findPlanets(router.query.planet));
  }, [router.query.planet]);
  return (
    <Layout id="planet">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center lg:text-left">
        <Subheading
          num="01"
          text="PICK YOUR DESTINATION"
          className="text-center lg:text-left"
        />
        <div className="items-center lg:flex">
          <div className="my-4 w-full px-6">
            <Image
              src={
                !datas
                  ? "/assets/destination/image-moon.webp"
                  : datas.images.webp
              }
              width={445}
              height={445}
            />
          </div>
          <div className="flex w-full flex-col gap-y-5 lg:items-start">
            <Tabs />
            <h3 className="text-heading3 uppercase">{datas?.name}</h3>
            <p className="mx-auto w-[80%] text-center  font-tertiary leading-7 md:w-[70%] lg:mx-0 lg:text-left">
              {datas?.description}
            </p>
            <div className="mx-auto h-[2px] w-[97%] bg-[#383B4B] md:w-[70%]  lg:mx-0 " />
            {/* Planet Metrics */}
            <div className="flex flex-col justify-around gap-y-5 uppercase md:flex-row lg:gap-x-14">
              <div>
                <p className="font-secondary text-highlight">AVG. DISTANCE</p>
                <p className="text-subheading1">{datas?.distance}</p>
              </div>
              <div>
                <p className="font-secondary text-highlight">
                  EST. TRAVEL TIME
                </p>
                <p className="text-subheading1">{datas?.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Planet;
