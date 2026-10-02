import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="h-[35rem] w-[40rem] max-[480px]:w-full overflow-hidden rounded-t-[0.8rem] shadow-[var(--box-shadow-card)] block"
      target="_blank"
      rel="noreferrer"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <div className="sticky top-0 z-[2] h-[2.5rem] bg-[var(--color-white)] flex items-center justify-end">
        <p className="absolute top-0 left-4 text-[1.8rem] text-[var(--color-rightside)]">{title}</p>
        <div className="h-2 w-2 rounded-full bg-[var(--color-rightside)] mr-2"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--color-rightside)] mr-2"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--color-rightside)] mr-2"></div>
      </div>
      <span
        className={`inline-block w-full h-full bg-cover bg-top transition-[background-position] duration-[3s] linear ${loaded ? "bg-[url('https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif')] bg-center" : ""}`}
        style={{
          backgroundImage: `url(${loaded ? backgroundImg : ""})`,
          backgroundSize: "cover",
          backgroundPosition: loaded ? undefined : "top center",
        }}
      />
    </motion.a>
  );
};

export default PortfolioCart;
