import Slider from "@/components/Slider";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "@/data.json";
import React, { useEffect, useState } from "react";
import { equipmentProps } from "@/types/main";

const Equipment = () => {
  const [datas, setDatas] = useState<equipmentProps | undefined>();
  const router = useRouter();
  const findEquipment = (routes: string | string[] | undefined) => {
    const equipment = data.technology.find((i) => {
      return i.name.replace(" ", "-").toLowerCase() === routes;
    });
    return equipment;
  };
  useEffect(() => {
    setDatas(findEquipment(router.query.equipment));
  }, [router.query.equipment]);
  return (
    <Layout id="technology">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center lg:text-left">
        <Subheading
          num="03"
          text="SPACE LAUNCH 101"
          className="text-center  md:text-left"
        />
        <div className="lg:flex lg:flex-row-reverse lg:items-center 2xl:-mr-52">
          <div className="my-5 lg:hidden">
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
          <div className="my-5 hidden lg:block">
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
          <div className="w-full space-y-5 lg:flex lg:items-center lg:gap-x-9">
            <Slider />
            <div className="lg:space-y-1">
              <p className="font-secondary text-subheading2 text-highlight">
                THE TERMINOLOGY ...
              </p>
              <h3 className="text-subheading1 uppercase lg:text-heading3">
                {datas?.name}
              </h3>
              <p className="mx-auto w-[80%]  font-tertiary text-highlight lg:m-0 lg:w-[50%] lg:text-lg">
                {datas?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;
