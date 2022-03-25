import { useRef } from 'react'
import { data, images } from '../../constants';
import './About.scss';

const About = () => {

    const imageShow = useRef();

    const showAward = () => {
        imageShow.current.setAttribute('src', images.certificate);
    }

    return (
        <section id="about" className="about">

            <h1 className="heading"><span>About</span> Me</h1>

            <div className="row">

                {/* About Use Info Print Here */}
                <div className="info" data-aos={"fade-down"} >
                    {
                        Object.keys(data.userInfo).map((key, i) => (
                            <h3 key={i}> <span>{key} : </span> {data.userInfo[key]} </h3>
                        ))
                    }
                    <a href={images.cv} className="btn">
                        Download CV <i className="fas fa-download"></i>
                    </a>
                    <a href='https://cv-of-taiseen.netlify.app' className="btn" target='_blank' rel="noreferrer">
                        Live CV <i className="fas fa-eye"></i>
                    </a>
                </div>

                <div className="counter" data-aos={"fade-down"} >
                    <div className="box">
                        <span>1+</span>
                        <h3>Year of experience</h3>
                    </div>

                    <div className="box">
                        <span>12+</span>
                        <h3>Project Completed</h3>
                    </div>

                    <div className="box">
                        <span>3+</span>
                        <h3>Happy Client</h3>
                    </div>

                    <div className="box award" onMouseOver={showAward}>
                        <span>1+</span>
                        <h3>Certification</h3>
                        <img alt="award-img" className="hoverImage" ref={imageShow} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;