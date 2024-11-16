const WhatDoIdoCard = ({
  image,
  cardTitle,
  cardParagraph,
  headerTitle,
  rotatePosition,
  bgColor,
  borderColor,
  headerTitleBgColor,
  imageWidth
}) => {
  const rotationClass =
    rotatePosition === "left" ? "-rotate-3" : "rotate-3";

  return (
    <div className="flex justify-center mb-6 md:mr-6">
      <div
        style={{
          backgroundColor: `${bgColor}`,
          borderColor: `${borderColor}`
        }}
        className={`relative p-7 md:p-5 md:w-[300px] xl:w-[350px] xl:p-7 xl:border-8 flex justify-end flex-col border-8 md:border-4 ${rotationClass} rounded-lg h-96 w-80`}
      >
        <div
          style={{
            backgroundColor: `${headerTitleBgColor}`,
          }}
          className="absolute font-handlee text-2xl font-bold bg-blue-300 -top-4 xl:text-3xl"
        >
          {headerTitle}
        </div>

        <img
          src={image}
          alt="coffee cup"
          width={imageWidth}
          height={imageWidth}
          className="mb-5"
        />
        <div>
          <h3 className="font-inter font-semibold text-3xl text-gray-800 md:text-2xl xl:text-3xl">
            {cardTitle}
          </h3>
          <p className="font-inter text-md md:text-sm text-gray-700 mt-2 xl:text-lg">
            {cardParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatDoIdoCard;
