import SectionHeading from "../Utilities/SectionHeading";
import portfolioDB from "../../db/portfolioDB";
import PortfolioCart from "./PortfolioCart";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  getAllProjectTypes,
  getAllTechValues,
  projectTypes,
  getAllTechs,
} from "../../constants/techStacks";

const PortfolioContainer = () => {
  const [activeType, setActiveType] = useState(projectTypes.all.value);
  const [activeTech, setActiveTech] = useState("all");

  // 1. Filter projects by selected type
  const projectsByType = useMemo(() => {
    return portfolioDB.filter((project) => {
      return activeType === "all" || project.type?.includes(activeType);
    });
  }, [activeType]);

  // 2. Dynamically extract and categorize available technologies based on filtered projects
  const availableTechnologies = useMemo(() => {
    const validTechValues = new Set();

    // Collect only valid tech values present in the currently filtered projects
    projectsByType.forEach((project) => {
      project.tag?.forEach((techValue) => {
        if (getAllTechValues().includes(techValue)) {
          validTechValues.add(techValue);
        }
      });
    });

    // Include 'frontend', 'backend', and 'common' for both 'all' and 'fullstack'
    const allowedCategories =
      activeType === "all" || activeType === "fullstack"
        ? ["common", "frontend", "backend"]
        : activeType === "frontend"
          ? ["common", "frontend"]
          : ["common", "backend"];

    // Filter, categorize, and sort the available technologies
    const dynamicTechs = getAllTechs()
      .filter(
        (tech) =>
          validTechValues.has(tech.value) &&
          allowedCategories.includes(tech.category),
      )
      .sort((a, b) => a.label.localeCompare(b.label));

    return [{ label: "All", value: "all", category: "all" }, ...dynamicTechs];
  }, [projectsByType, activeType]);

  // 3. Final filter applying both type and technology constraints
  const filteredPortfolio = useMemo(() => {
    return [...projectsByType]
      .filter(
        (project) => activeTech === "all" || project.tag?.includes(activeTech),
      )
      .reverse(); // Show newest first
  }, [projectsByType, activeTech]);

  const handleTypeChange = (type) => {
    setActiveType(type);
    setActiveTech("all"); // Reset tech filter when project type changes
  };

  // Correct Tailwind arbitrary value syntax for CSS variables
  const typeButtonClass = (isActive) =>
    `rounded-xl px-8 py-4 text-2xl font-bold transition-all duration-300 shadow-md ${
      isActive
        ? "bg-[var(--color-yellow)] text-[var(--color-education)] shadow-lg scale-105"
        : "bg-[var(--color-leftside)] text-[var(--color-white)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-education)] hover:scale-105"
    }`;

  // Correct Tailwind arbitrary value syntax for CSS variables
  const techButtonClass = (isActive) =>
    `rounded-lg px-6 py-3 text-2xl font-semibold transition-all duration-300 ${
      isActive
        ? "bg-[var(--color-yellow)] text-[var(--color-education)] shadow-md"
        : "bg-[var(--color-leftside)] text-[var(--color-white)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-education)]"
    }`;

  // Calculate the number of actual tech filters (excluding the "All" button)
  const techFilterCount = availableTechnologies.length - 1;

  return (
    <section id="work" className="min-h-screen p-4 max-[480px]:p-2">
      <SectionHeading spanValue="Work" data="Samples..." />

      {/* Level 1: Project Type Filter */}
      <div className="py-6">
        <div className="flex flex-wrap justify-center gap-4">
          {getAllProjectTypes().map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => handleTypeChange(value)}
              aria-pressed={activeType === value}
              className={typeButtonClass(activeType === value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Level 2: Technology Filter (Smart Dynamic) */}
      <div className="pb-8">
        <p className="mb-5 text-center text-xl font-semibold text-gray-400">
          Filter by technology -{" "}
          <span className="text-(--color-yellow)">{techFilterCount}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 px-4 md:px-36">
          {availableTechnologies.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveTech(value)}
              aria-pressed={activeTech === value}
              className={techButtonClass(activeTech === value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Count */}
      <p className="mb-8 text-center text-xl font-bold text-gray-300">
        <span className="text-(--color-yellow)">
          {filteredPortfolio.length}{" "}
        </span>
        <span className="font-semibold text-gray-400">- projects found</span>
      </p>

      {/* Project Cards */}
      <motion.div
        layout
        className="flex flex-wrap items-center justify-center gap-10 py-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((info) => (
            <PortfolioCart key={info.id} info={info} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPortfolio.length === 0 && (
        <p className="py-16 text-center text-3xl font-semibold text-red-400">
          No projects found for these filters.
        </p>
      )}
    </section>
  );
};

export default PortfolioContainer;
