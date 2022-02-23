import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center font-primary">
      <NextSeo
        title="Space Tourism Website"
        description="Next.js Boilerplate configuration with Eslint, Prettier and Husky"
      />
    </section>
  );
};

export default Home;
