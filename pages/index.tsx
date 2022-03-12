import Layout from "@/layout/Layout";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout id="home">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-16 text-center lg:fixed lg:bottom-9 lg:left-0 lg:right-0 lg:h-max lg:flex-row lg:items-center">
        <div>
          <p className="font-secondary text-heading5  text-highlight">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-7xl md:text-9xl">SPACE</h1>
          <p className="mx-auto w-[80%] font-tertiary text-highlight lg:w-[27rem]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div>
          <Link href="destination/moon">
            <div className="mx-auto h-36 w-36 cursor-pointer rounded-full bg-white text-center leading-[9rem] ring-gray-400/50 transition duration-300 ease-in-out hover:ring-[40px] md:h-52 md:w-52 md:leading-[13rem]">
              <span className="text-xl text-black">EXPLORE</span>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
