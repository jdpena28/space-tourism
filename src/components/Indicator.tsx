import Link from "next/link";
import React from "react";
import data from "@/data.json";

const NavLink = ({ routes }: { routes: string }) => {
  return (
    <Link href={`${routes}`}>
      <div className="h-4 w-4 cursor-pointer rounded-full bg-gray-500" />
    </Link>
  );
};

const Indicator = () => {
  const routes = data.crew.map((i) => i.name.replace(" ", "-").toLowerCase());
  return (
    <div className="mt-24 flex gap-x-4">
      {routes.map((i) => {
        return <NavLink routes={i} />;
      })}
    </div>
  );
};

export default Indicator;
