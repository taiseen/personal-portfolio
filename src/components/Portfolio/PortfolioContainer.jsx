import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../Utilities/SectionHeading";
import portfolioDB from "../../db/portfolioDB";
import PortfolioCart from "./PortfolioCart";

const PortfolioContainer = () => {
  const [activeClick, setActiveClick] = useState("all");

  const category = [
    { context: "all" },
    { context: "sass + js" },
    { context: "css + react" },
    { context: "sass + react" },
    { context: "tailwind-css + react" },
    { context: "material-ui + react" },
    { context: "css + next-js" },
    { context: "chakra-ui + next-js" },
    { context: "tailwind-css + next-js" },
    { context: "react + node-js" },
  ];

  const filteredPortfolio =
    activeClick === "all"
      ? [...portfolioDB].reverse()
      : portfolioDB
          .filter((info) => {
            const [tag1, tag2] = activeClick.split("+").map((t) => t.trim());
            return info.tag[0] === tag1 && info.tag[1] === tag2;
          })
          .reverse();

  return (
    <section id="works" className="min-h-screen p-4 max-[480px]:p-2">
      <SectionHeading spanValue="Works" data="My" />

      <ul className="flex flex-wrap items-center justify-center py-8 list-none gap-6">
        {category.map((cat) => (
          <li
            key={cat.context}
            className={`inline-block w-max py-3 px-6 bg-(--color-leftside) cursor-pointer text-[2rem] rounded-xl transition-colors duration-300 ${
              activeClick === cat.context
                ? "bg-(--color-yellow)"
                : "text-[var(--color-white)] hover:bg-(--color-yellow) hover:text-(--color-education)"
            }`}
            onClick={() => setActiveClick(cat.context)}
          >
            {cat.context}
          </li>
        ))}
      </ul>

      <motion.div
        className="flex items-center justify-center flex-wrap gap-10 py-2"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((info) => (
            <PortfolioCart key={info.id} info={info} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortfolioContainer;
