import { data } from "../../constants";

const Institute = ({ idx, org: { year, level, institute, city, link } }) => (
  <div
    className="w-full relative mb-12 last:mb-0 pl-[100px] text-left md:pl-0 md:odd:pl-[calc(50%+40px)] md:even:pr-[calc(50%+40px)] md:even:text-right"
    data-aos="fade-down"
  >
    {/* Bigger Icon Dot */}
    <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 size-20 bg-(--color-yellow) rounded-full flex items-center justify-center text-(--color-education) shadow-lg z-10">
      <i className="fas fa-graduation-cap text-4xl"></i>
    </div>

    {/* Date - Aligned vertically with the icon */}
    <div
      className={`flex items-center h-20 mb-4 ${idx % 2 === 0 ? "justify-end" : ""}`}
    >
      <div className="text-[2.5rem] text-(--color-yellow) font-bold leading-none">
        {year}
      </div>
    </div>

    {/* Content Box */}
    <div className="border border-[#3b4149] p-8 rounded-2xl shadow-md">
      <h3 className="text-[2rem] text-white mb-2.5 font-semibold">{level}</h3>

      {/* Institute with optional hyperlink */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-light text-blue-600 text-[1.5rem] hover:text-(--color-yellow) transition-colors block mb-1"
        >
          {institute}
        </a>
      ) : (
        <p className="text-white font-light text-[1.5rem] mb-1">{institute}</p>
      )}

      <p className="text-white font-light text-[1.5rem]">{city}, Bangladesh</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-24 px-4">
      <h1 className="text-[4rem] text-center text-white p-4 mx-auto max-w-4xl border-b border-white/40 mb-16">
        My <span className="text-(--color-yellow)">Education</span>
      </h1>

      {/* Changed max-w-fit to max-w-5xl w-full to fix mobile breaking */}
      <div className="max-w-5xl w-full mx-auto relative">
        {/* Center Line - left-10 (40px) aligns with center of size-20 (80px) icon */}
        <div className="absolute w-1 h-full bg-[#3b4149] left-10 md:left-1/2 md:-translate-x-1/2 top-10 bottom-0"></div>

        {data.education
          .slice(0)
          .reverse()
          .map((edu, index) => (
            <Institute key={edu.year + index} org={edu} idx={index} />
          ))}
      </div>
    </section>
  );
};

export default Education;
