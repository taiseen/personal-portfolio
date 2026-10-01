import { motion } from "framer-motion"; // 1. Import Framer Motion hooks
import { useEffect, useState } from "react";

// 4. Convert to motion component and apply the exact animation pattern
const PortfolioCart = ({ info: { title, liveUrl, imgUrlEndPoint, tag } }) => {
  const backgroundImg = `https://i.ibb.co/${imgUrlEndPoint}.jpg`;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = backgroundImg;
    image.onload = () => {
      setLoaded(true);
    };
  }, [backgroundImg]);

  return (
    <motion.a
      href={liveUrl}
      title={title}
      className="image"
      target="_blank"
      rel="noreferrer"
      // --- Framer Motion Animation Pattern ---
      layout // Smoothly animates position changes when filtered
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      // ---------------------------------------
    >
      <div className="browser">
        <p className="title">{title}</p>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <span
        className={`lazy-background-image ${loaded ? "loaded" : ""}`}
        style={{ backgroundImage: `url(${loaded ? backgroundImg : ""})` }}
      />
    </motion.a>
  );
};

export default PortfolioCart;
