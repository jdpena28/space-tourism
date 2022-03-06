import Layout from "@/layout/Layout";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout id="home" className="flex h-full items-center">
      <div className="fixed bottom-8 flex w-full items-center justify-around lg:static lg:mt-8 lg:h-max lg:flex-col  lg:gap-y-20 lg:text-center">
        <div>
          <p className="font-secondary text-heading5  text-highlight">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-heading1 ">SPACE</h1>
          <p className="w-[24.6rem] font-tertiary text-highlight lg:w-[27rem]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link href="destination/moon">
          <div className="h-72 w-72 cursor-pointer rounded-full bg-white text-center leading-[18rem] ring-gray-400/50 transition duration-300 ease-in-out hover:ring-[40px]">
            <span className="text-heading4 text-black">EXPLORE</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
