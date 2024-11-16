import Link from "next/link";
import WhatDoIdoCard from "../../components/WhatDoIdoCard";
import WorkCard from "../../components/Cards/WorkCard";
import { projects } from "../util";
import ProjectCard from "../../components/ProjectCard";
import Skills from "@/components/Cards/Skills";
import Social from "@/components/Cards/Social";
import Contact from "@/components/Contact";
import NavbarPortfolio from "@/components/NavbarPortfolio";

const Resume = "/ArchanResume.pdf";
const page = () => {
  return (
    <div className="ml-7 pl-5 mr-5 md:pr-0 md:max-w-2xl bg-dot !bg-repeat !bg-5 border-l-2 border-black mx-auto xl:max-w-7xl xl:mx-auto mobile-480:w-[480px] mobile-480:mx-auto sm:w-full lg:max-w-5xl lg:mx-20 lg:w-auto  lg:bg-contain xl:bg-cover xl:px-4">
      {/* Navbar  */}
      <NavbarPortfolio />
      {/* Hero  */}
      <div className="mt-11 mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:flex md:gap-10 md:w-auto md:mx-10 md:justify-between lg:gap-32 xl:gap-28 xl:mr-auto">
        <div className="md:flex flex-col">
          <div className="flex items-center gap-4 md:justify-center">
            <div>
              <img
                src="/Ink 1.png"
                className="md:h-auto md:w-32 lg:w-36"
                width={120}
                height={120}
                alt="character"
              />
            </div>
            <div>
              <img
                src="/arrow.png"
                className="md:w-12  md:h-auto"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h2 className="font-handlee font-bold -rotate-12 bg-blue-300 text-lg md:text-2xl">
                archan
              </h2>
            </div>
          </div>
          <h2 className="mt-8 text-4xl md:text-3xl relative font-inter font-semibold w-2/3 sm:w-auto md:w-2/3 md:mx-auto lg:text-4xl text-gray-800 lg:w-auto xl:text-5xl xl:w-full">
            I{" "}
            <span className="bg-pink-200 h-3 block absolute top-5 left-5 z-10 w-32 md:w-28 md:top-4 lg:top-5 lg:w-32 xl:top-6 xl:h-4 xl:w-44"></span>
            <span className="relative z-20">develop top notch websites</span>
          </h2>
        </div>
        <div className="flex flex-col md:justify-end md:w-1/2">
          <p className="mt-4 font-inter text-lg md:text-base md:w-auto lg:text-lg xl:text-xl">
            I'm <strong>Archan Dhrangadharia</strong>, building standout
            websites using cutting-edge tech for a strong digital footprint.
          </p>
          <Link
            href={Resume}
            download={"ArchanResume.pdf"}
            target="_blank"
            className="w-max"
          >
            <button className="bg-gray-800 px-3 py-2 rounded text-white font-inter font-semibold mt-4 flex items-center gap-1 hover:bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Resume<span className="material-symbols-outlined">download</span>
            </button>
          </Link>
        </div>
      </div>
      {/* What I Do section  */}
      <div className="mt-20 mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10 xl:mr-auto">
        <h2 className="font-handlee font-bold text-2xl bg-blue-200 w-max xl:text-3xl">
          What i do?
        </h2>
        <img
          src="/arrow.png"
          alt="arrow"
          width={50}
          height={50}
          className="-rotate-90 mt-8"
        />
        <div className="py-5 md:flex md:flex-wrap lg:justify-center xl:w-full">
          {/* Card 1 */}
          <div>
            <WhatDoIdoCard
              image={"/CoffeeCup.png"}
              imageWidth={50}
              headerTitle={"Code"}
              headerTitleBgColor="#9DDCFF"
              cardTitle={"Website developement"}
              cardParagraph={
                "I craft dynamic, full-stack websites, integrating front-end with powerful back-end functionality."
              }
              bgColor="#FFE68C"
              borderColor="#EECD56"
              rotatePosition={"left"}
              key={1}
            />
          </div>
          {/* Card 2 */}
          <div>
            <WhatDoIdoCard
              image={"/ComputerIllustration.png"}
              imageWidth={130}
              headerTitle={"Design"}
              headerTitleBgColor="#FFC9F0"
              cardTitle={"UI Design"}
              cardParagraph={
                "Proficient in UI design, adept with industry tools like Figma."
              }
              bgColor="#9DDCFF"
              borderColor="#5AB5E8"
              rotatePosition={"right"}
              key={2}
            />
          </div>
          {/* Card 3 */}
          <div>
            <WhatDoIdoCard
              image={"/NoCodeDevImage.png"}
              imageWidth={130}
              headerTitle={"No Code Dev"}
              headerTitleBgColor="#FFE68C"
              cardTitle={"No Code websites"}
              cardParagraph={
                "Exploring no-code website development, familiar with platforms like WordPress and Wix, "
              }
              bgColor="#FFC9F0"
              borderColor="#F384D4"
              rotatePosition={"left"}
              key={3}
            />
          </div>
        </div>
      </div>
      <div className="mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10">
        <h2 className="mt-20 font-handlee font-bold text-2xl bg-customPink inline-block xl:text-3xl">
          Featured Projects
        </h2>
        <img
          src="/arrow.png"
          alt="arrow"
          width={50}
          height={50}
          className="-rotate-90 my-8"
        />
        <p className="font-inter text-lg text-gray-800 xl:text-xl">
          Worked on several projects in technologies like React.js, Next.js,
          Laravel, PHP.
        </p>
        <Link href="/allprojects" className="hidden lg:block">
          <button className="mt-5 bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max mr xl:text-xl">
            Show all projects
          </button>
        </Link>
        <div className="mt-4 bg-blue-300 p-2 lg:w-max">
          <h2 className="font-handlee text-2xl font-bold">💡Tip</h2>
          <h2 className="font-handlee text-lg">
            To filter the projects, click on the tags to search.
          </h2>
        </div>

        <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
          {projects.slice(0, 3).map((project) => {
            return (
              <ProjectCard
                key={project.key}
                projectLink={project.projectLink}
                image={project.image}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                title={project.title}
                buttonText={project.buttonText}
                buttonBgColor={project.buttonBgColor}
                buttonBorderColor={project.buttonBorderColor}
                buttonLink={"#"}
                tags={project.tags}
              />
            );
          })}
        </div>
        <Link href="/allprojects">
          <button className="mt-5 lg:hidden bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max ml-auto">
            Show all projects
          </button>
        </Link>
      </div>
      {/* Work Experience  */}
      <div className="mt-20">
        <div className="mobile-480:w-[400px] mobile-480:mx-auto md:x-auto md:mx-10">
          <div>
            <h2 className="font-handlee bg-customPink font-bold text-2xl w-max xl:text-3xl">
              Work Experience
            </h2>
            <img
              src="/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-90 my-8"
            />
          </div>
          <WorkCard
            companyLogo="/workImages/MS-logo.png"
            companyName="Mission Sustainability"
            position="Software developer intern"
            startDate="May 2023"
            endDate="June 2023"
            key={1}
            logoWidth={100}
          />
        </div>
      </div>
      {/* Skills  */}
      <Skills />

      {/* Socials  */}
      <div className="mt-20">
        <div className="mobile-480:w-[400px] mobile-480:mx-auto md:x-auto md:mx-10">
          <div>
            <h2 className="font-handlee bg-customPink font-bold text-2xl w-max xl:text-3xl">
              Socials
            </h2>
            <img
              src="/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="-rotate-90 my-8"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Social
              name="Github"
              href="https://github.com/ArchanRD"
              logoHref="/sociaIImages/github.png"
              profilePageHref="/ProfilePages/githubProfileSS.png"
            />
            <Social
              name="LinkedIn"
              href="https://www.linkedin.com/in/archan-dhrangadharia-ba67a0227/"
              logoHref="/sociaIImages/linkedin.png"
              profilePageHref="/ProfilePages/linkedinProfileSS.png"
            />
          </div>
        </div>
      </div>
      {/* Contact  */}
      <Contact />
    </div>
  );
};

export default page;
