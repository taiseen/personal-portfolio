import SectionHeading from "../Utilities/SectionHeading";
import portfolioDB from "../../db/portfolioDB";
import { data, images } from "../../constants";
import { useRef } from "react";

const About = () => {
  const imageShow = useRef();

  const showAward = () => {
    imageShow.current.setAttribute("src", images.certificate);
  };

  return (
    <section id="about" className="min-h-screen p-4 max-[480px]:p-2">
      <SectionHeading spanValue="About" data="Me" />

      <div className="flex flex-wrap justify-center">
        {/* About User Info */}
        <div
          className="flex-[1_1_48rem] py-8 px-4 md:pl-[6rem] normal-case max-[480px]:p-8"
          data-aos={"fade-down"}
        >
          {Object.keys(data.userInfo).map((key, i) => (
            <h3
              key={i}
              className="text-[2rem] text-(--color-yellow) py-4 font-normal"
            >
              <span className="text-[var(--color-white)] px-2">{key} : </span>{" "}
              {data.userInfo[key]}
            </h3>
          ))}
          <a
            href={images.cv}
            className="inline-block w-max py-[1.1rem] px-[2.2rem] mt-4 mr-8 bg-(--color-leftside) text-[var(--color-white)] cursor-pointer text-[2rem] rounded-4xl transition-colors duration-300 hover:bg-(--color-yellow) hover:text-(--color-education)"
          >
            Download CV <i className="fas fa-download pl-4 text-[1.8rem]"></i>
          </a>
          <a
            href="https://taiseen-cv.netlify.app"
            className="inline-block w-max py-[1.1rem] px-[2.2rem] mt-4 mr-8 bg-(--color-leftside) text-[var(--color-white)] cursor-pointer text-[2rem] rounded-4xl transition-colors duration-300 hover:bg-(--color-yellow) hover:text-(--color-education)"
            target="_blank"
            rel="noreferrer"
          >
            Live CV <i className="fas fa-eye pl-4 text-[1.8rem]"></i>
          </a>
        </div>

        <div
          className="flex-[1_1_48rem] flex justify-center flex-wrap"
          data-aos={"fade-down"}
        >
          <div className="w-[20rem] h-[15rem] bg-(--color-leftside) text-[var(--color-white)] text-center p-8 m-8 cursor-pointer border border-dashed border-transparent hover:border-(--color-yellow) max-[480px]:w-full">
            <span className="text-[4rem] text-(--color-yellow)">3.5+</span>
            <h3 className="text-[2rem]">Year of experience</h3>
          </div>

          <div className="w-[20rem] h-[15rem] bg-(--color-leftside) text-[var(--color-white)] text-center p-8 m-8 cursor-pointer border border-dashed border-transparent hover:border-(--color-yellow) max-[480px]:w-full">
            <span className="text-[4rem] text-(--color-yellow)">
              {portfolioDB.length}+
            </span>
            <h3 className="text-[2rem]">Project Completed</h3>
          </div>

          <div className="w-[20rem] h-[15rem] bg-(--color-leftside) text-[var(--color-white)] text-center p-8 m-8 cursor-pointer border border-dashed border-transparent hover:border-(--color-yellow) max-[480px]:w-full">
            <span className="text-[4rem] text-(--color-yellow)">8+</span>
            <h3 className="text-[2rem]">Happy Client</h3>
          </div>

          <div
            className="relative w-[20rem] h-[15rem] bg-(--color-leftside) text-[var(--color-white)] text-center p-8 m-8 cursor-pointer border border-dashed border-transparent hover:border-(--color-yellow) max-[480px]:w-full group"
            onMouseOver={showAward}
            style={{ animation: "pulsing 3s ease-out infinite" }}
          >
            <span className="text-[4rem] text-(--color-yellow) group-hover:text-[tomato]!">
              1+
            </span>
            <h3 className="text-[2rem] group-hover:text-[tomato]!">
              Certification
            </h3>
            <img
              alt="award-img"
              ref={imageShow}
              loading="lazy"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.5] h-[30rem] max-w-[90vw] max-h-[90vh] object-contain opacity-0 z-[9999] transition-all duration-[2000ms] ease-in-out shadow-[var(--box-shadow-card)] group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
