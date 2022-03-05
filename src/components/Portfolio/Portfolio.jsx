import { useEffect } from 'react'
import { data } from '../../constants'
import './Portfolio.scss'

const WorkBox = ({ info: { title, liveUrl, imgUrlEndPoint } }) => (

  <a
    href={liveUrl}
    title={title}
    className="image"
    target="_blank"
    rel="noreferrer"
    data-aos={"zoom-in"}
  >

    <div class="browser">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <img src={`https://i.ibb.co/${imgUrlEndPoint}.jpg`} alt={title} />

  </a>
)

const Portfolio = () => {

  useEffect(() => {

  }, [])

  return (

    <section id="portfolio" className="portfolio">

      <h1 className="heading"><span>portfolio</span></h1>


      <ul class="btns-container">
        <li class="btn active" data-filter="all">all</li>
        <li class="btn" data-filter="html">SASS + JS</li>
        <li class="btn" data-filter="javascript">SASS + React</li>
        <li class="btn" data-filter="react">Tailwind + React</li>
        <li class="btn" data-filter="nodejs">NodeJs</li>
      </ul>

      <div className="work-container">
        {
          data.portfolio.map(info => (
            <WorkBox key={info.id} info={info} />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio;