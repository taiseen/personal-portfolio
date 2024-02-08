import { useEffect, useState } from 'react'
import portfolioDB from '../../db/portfolioDB'
import './Portfolio.scss'

const Portfolio = () => {

  const [activeClick, setActiveClick] = useState('all')

  const category = [
    { context: 'all' },
    { context: 'sass + js' },
    { context: 'css + react' },
    { context: 'sass + react' },
    { context: 'tailwind-css + react' },
    { context: 'material-ui + react' },
    { context: 'css + next-js' },
    { context: 'chakra-ui + next-js' },
    { context: 'tailwind-css + next-js' },
    { context: 'react + node-js' },
  ]


  return (

    <section id="portfolio" className="portfolio">

      <h1 className="heading"><span>portfolio</span></h1>

      <ul className="btn-container">
        {
          category.map(cat => (
            <li
              key={cat.context}
              className={`btn ${activeClick === cat.context && 'active'}`}
              onClick={() => setActiveClick(cat.context)}
            >
              {cat.context}
            </li>
          ))
        }
      </ul>

      <div className="work-container">
        {
          activeClick === 'all'
            ? portfolioDB.slice(0).reverse().map(info => (
              <WorkBox key={info.id} info={info} />
            ))
            : portfolioDB.map(info =>
              (info.tag[0] === activeClick.split('+')[0].trim() &&
                info.tag[1] === activeClick.split('+')[1].trim())
              && <WorkBox key={info.id} info={info} />
            ).reverse()
        }
      </div>
    </section>
  )
}

export default Portfolio;

const WorkBox = ({ info: { title, liveUrl, imgUrlEndPoint, tag } }) => {

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
    <a
      href={liveUrl}
      title={title}
      className="image"
      target="_blank"
      rel="noreferrer"
      data-aos={"zoom-in"}
    >

      <div className="browser">
        <p className="title">{title}</p>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* <img src={`https://i.ibb.co/${imgUrlEndPoint}.jpg`} alt={title} /> */}
      <span
        className={`lazy-background-image ${loaded ? 'loaded' : ''}`}
        style={{ backgroundImage: `url(${loaded ? backgroundImg : ''})` }}
      // style={{ backgroundImage: `url(${backgroundImg})` }}
      >

      </span>

    </a>
  )
}