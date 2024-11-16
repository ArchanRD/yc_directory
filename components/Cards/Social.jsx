import Link from "next/link";
import React from "react";

const Social = ({ name, href, logoHref, profilePageHref }) => {
  return (
    <div
      className={`bg-white w-48 h-14 group group-hover:border-2 group-hover:border-black text-center rounded-md shadow-sm border border-gray-100 hover:shadow-md cursor-pointer transition ease-in-out duration-300`}
    >
      <Link href={href} className="py-2 px-4 inline-block" target="_blank">
        <div className="font-generalSans font-medium text-base flex gap-2 items-center w-max">
          {/* logo */}
          <img src={logoHref} alt="" className="h-8 lg:h-10" />
          <h2 className="lg:text-lg ">{name}</h2>
        </div>
      </Link>
      <Link
        href={href}
        target="_blank"
        className="h-0 block group-hover:h-auto transition ease-in-out duration-300"
      >
        <div className="hidden lg:block lg:opacity-0 pointer-events-none w-48 h-auto rounded-b-md group-hover:opacity-100 transition ease-in-out duration-300">
          <img
            src={profilePageHref}
            className="bg-cover rounded-b-md transition ease-in-out duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

export default Social;
