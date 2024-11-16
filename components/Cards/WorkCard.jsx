import Link from "next/link";

const WorkCard = ({
  companyLogo,
  logoWidth,
  companyName,
  position,
  startDate,
  endDate,
}) => {
  return (
    <div
      className="p-2 bg-white rounded-md shadow-md xl:rounded-xl xl:p-4 border border-white hover:border-gray-200 transition ease-in-out active:bg-gray-50 active:scale-95 duration-200"
    >
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/archan-dhrangadharia-ba67a0227/"
        className="flex flex-wrap items-center gap-1"
      >
        <img
          src={companyLogo}
          alt="company logo"
          width={logoWidth}
          height={logoWidth}
          className="xl:w-20"
        />
        <div>
          <h2 className="font-generalSans font-semibold text-md font-gray-800 xl:text-2xl">
            {companyName}
          </h2>
          <p className="font-generalSans font-medium text-gray-800 text-sm xl:text-lg">
            {position}
          </p>
          <p className="font-generalSans text-xs text-gray-700 xl:text-sm">
            {startDate} - {endDate}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
