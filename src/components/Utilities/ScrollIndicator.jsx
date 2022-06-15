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


  const progressBarWidth = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '.4rem',
    zIndex: '999',
    borderTopRightRadius: '1px',
    borderBottomRightRadius: '1px',
    backgroundColor: 'var(--yellow)',
    width: scroll,
  }

  const progressBarNumber = {
    fontSize: '1.7rem',
    color: 'var(--white)',
    position: 'absolute',
    top: '.2rem',
    right: '0rem',
  }


  useEffect(() => window.addEventListener("scroll", scrollProgress), []);


  return (

    <div style={progressBarWidth}>
      <span style={progressBarNumber}>
        {/* {`${parseFloat(scroll).toFixed(0)}%`} */}
      </span>
    </div>

  );
}

export default ScrollIndicator;