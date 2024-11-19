import Link from "next/link";
import ProjectCardTag from "./Tags/ProjectCardTag";

const ProjectCard = ({
  image,
  imageWidth,
  imageHeight,
  title,
  buttonText,
  tags,
  projectLink,
}) => {
  return (
    <div className="border-2 bg-white border-gray-200 p-4 rounded-2xl md:w-[300px] xl:w-[350px] hover:border-gray-500 hover:cursor-pointer">
        <img
          src={image}
          alt="project image"
          style={{
            height: `${imageHeight}px`,
            width: `${imageWidth}px`,
          }}
          className="rounded-lg object-cover"
        />
      <div className="flex flex-wrap gap-4 items-center justify-between mt-4">
        <h3 className="font-handlee text-xl font-bold xl:text-2xl">{title}</h3>
        {projectLink !== null ? (
          <Link href={projectLink}>
            <button className="text-white bg-gray-800 hover:bg-gray-700 border-none font-generalSans text-sm font-medium py-2 px-4 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
              {buttonText}
            </button>
          </Link>
        ) : (
          <button
            disabled={true}
            className="text-white  bg-gray-500 cursor-not-allowed border-none font-generalSans text-sm font-medium py-2 px-4 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
          >
            {buttonText}
          </button>
        )}
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <ProjectCardTag
            key={index}
              name={tag[0]}
              bgColor={tag[1]}
              borderColor={tag[2]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
