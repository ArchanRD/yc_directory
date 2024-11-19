
const Skill = ({ name }) => {
  return (
    <ul
      style={{ listStyleType: "disc" }}
      className=" grid grid-cols-2 mt-5 border-t-2 broder-black py-2"
    >
      {name.map((langName, index) => {
        return (
          <li
            key={index}
            className="text-black font-inter font-medium w-max mb-2 sm:text-lg xl:text-xl"
          >
            {langName}
          </li>
        );
      })}
    </ul>
  );
};

export default Skill;
