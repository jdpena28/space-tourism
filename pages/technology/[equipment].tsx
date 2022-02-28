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
      className="mx-auto grid h-full grid-cols-2 items-center justify-items-center">
      <div>
        <Subheading num="03" text="SPACE LAUNCH 101" />
        <br /> <br />
        <div className="flex space-x-8">
          <Slider />
          <div>
            <h3 className="font-secondary text-navText text-highlight">
              The Terminology...
            </h3>
            <p className="w-[30rem] text-heading3 uppercase">{datas?.name}</p>
            <p className="w-[27rem] font-tertiary text-lg text-highlight">
              {datas?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="justify-self-end 2xl:mt-8">
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
    </Layout>
  );
};

export default Equipment;
