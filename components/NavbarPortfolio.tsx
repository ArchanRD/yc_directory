import Link from "next/link";
import React from "react";

const NavbarPortfolio = () => {
  return (
    <div className="flex justify-between py-12 w-full mx-auto mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:w-auto md:mx-10 lg:mx-0 lg:w-auto lg:box-border">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <h1 className="font-handlee text-gray-800 text-2xl font-bold">
            archan
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NavbarPortfolio;
