import { motion, AnimatePresence } from "framer-motion"; // 1. Import Framer Motion hooks
import { useState } from "react";
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

  // 2. Clean filtering logic: prevents `false` values from entering the render array
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
    <section id="portfolio" className="portfolio">
      <h1 className="heading">
        <span>portfolio</span>
      </h1>

      <ul className="btn-container">
        {category.map((cat) => (
          <li
            key={cat.context}
            className={`btn ${activeClick === cat.context ? "active" : ""}`}
            onClick={() => setActiveClick(cat.context)}
          >
            {cat.context}
          </li>
        ))}
      </ul>

      {/* 3. Wrap the mapped items in AnimatePresence */}
      <motion.div className="work-container" layout>
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
