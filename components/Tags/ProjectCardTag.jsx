import React from "react";

const ProjectCardTag = ({ name, bgColor, borderColor, color }) => {
    if(!color){
      color = borderColor
    }
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        borderColor: `${borderColor}`,
        color: `${color}`
      }}
      className="font-generalSans text-xs rounded-xl border px-2 xl:text-md"
    >
      {name}
    </div>
  );
};

export default ProjectCardTag;
