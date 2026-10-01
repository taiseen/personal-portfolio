import { useEffect, useState } from 'react'

const ScrollIndicator = () => {

  const [scroll, setScroll] = useState(0);

  const scrollProgress = () => {

    let scrollPx = document.documentElement.scrollTop;
    let winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = `${scrollPx / winHeightPx * 100}%`;

    setScroll(scrolled);
  }

  useEffect(() => window.addEventListener("scroll", scrollProgress), []);


  return (

    <div
      className="fixed top-0 left-0 h-[0.4rem] z-[999] border-t-none border-b-[1px_solid_transparent] bg-[var(--color-yellow)]"
      style={{ width: scroll }}
    >
      <span className="text-[1.7rem] text-[var(--color-white)] absolute top-[0.2rem] right-0">
        {/* {`${parseFloat(scroll).toFixed(0)}%`} */}
      </span>
    </div>

  );
}

export default ScrollIndicator;
