import { useState } from 'react'
import { data } from '../../constants'
import './Portfolio.scss'

const WorkBox = ({ info: { title, liveUrl, imgUrlEndPoint, tag } }) => (

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
    <span style={{backgroundImage: `url("https://i.ibb.co/${imgUrlEndPoint}.jpg")`}}>
     
    </span>

  </a>
)

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
            ? data.portfolio.slice(0).reverse().map(info => (
              <WorkBox key={info.id} info={info} />
            ))
            : data.portfolio.map(info =>
              (info.tag[0] === activeClick.split('+')[0].trim() &&
                info.tag[1] === activeClick.split('+')[1].trim())
              && <WorkBox key={info.id} info={info} />
            )
        }
      </div>
    </section>
  )
}

export default Portfolio;