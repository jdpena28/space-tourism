import Slider from "@/components/Slider";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import data from "@/data.json";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { equipmentProps } from "@/types/main";

const Equipment: NextPage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<equipmentProps | undefined>();
  const findEquipment = (route: string | string[] | undefined) => {
    return data.technology.find((i) => {
      return i.name.replace(" ", "-").toLowerCase() === route;
    });
  };
  useEffect(() => {
    setDatas(findEquipment(router.query.equipment));
  }, [router.query.equipment]);
  return (
    <Layout
      id="technology"
      className="mx-auto grid h-full grid-cols-2 items-center justify-items-center lg:flex lg:flex-col-reverse  lg:justify-center">
      <div>
        <Subheading num="03" text="SPACE LAUNCH 101" className="lg:hidden" />
        <br /> <br />
        <div className="flex space-x-8 lg:block lg:text-center">
          <Slider />
          <div className="pt-11">
            <h3 className="font-secondary text-navText text-highlight">
              The Terminology...
            </h3>
            <p className="w-[30rem] text-heading3 uppercase">{datas?.name}</p>
            <p className="w-[27rem] font-tertiary text-lg text-highlight lg:w-[30rem]">
              {datas?.description}
            </p>
          </div>
        </div>
      </div>
      {/* Desktop View Image */}
      <div className="justify-self-end 2xl:mt-8 lg:hidden">
        <Image
          src={
            datas
              ? datas?.images.portrait
              : "/assets/technology/image-launch-vehicle-portrait.jpg"
          }
          width={486}
          height={496}
        />
      </div>
      <div className="justify-self-end 2xl:mt-8 lg:mt-0">
        <Image
          src={
            datas
              ? datas?.images.landscape
              : "/assets/technology/image-launch-vehicle-landscape.jpg"
          }
          width={768}
          height={310}
        />
      </div>
      <Subheading
        num="03"
        text="SPACE LAUNCH 101"
        className="fixed left-4 top-24 xl:hidden lg:block"
      />
    </Layout>
  );
};

export default Equipment;
