import Link from "next/link";
import React, { useEffect } from "react";
import data from "@/data.json";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

const NavLink = ({ routes }: { routes: string }) => {
  const { asPath } = useRouter();

  return (
    <Link href={`${routes}`}>
      <div
        className={`h-4 w-4 cursor-pointer rounded-full bg-gray-500 hover:bg-gray-400 ${
          asPath === `/crew/${routes}` ? "!bg-white" : ""
        }`}
      />
    </Link>
  );
};

const Indicator = () => {
  const routes = data.crew.map((i) => i.name.replace(" ", "-").toLowerCase());
  return (
    <div className="mt-24 flex gap-x-4">
      {routes.map((i) => {
        return <NavLink key={nanoid()} routes={i} />;
      })}
    </div>
  );
};

export default Indicator;
