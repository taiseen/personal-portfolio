import { useEffect } from 'react'
import { data } from '../../constants'
import './Education.scss'

const Institute = ({ org: { year, level, institute, city } }) => (
    <div className="box" data-aos={"fade-down"} >
        <i className="fas fa-graduation-cap"></i>
        <span>{year} </span>
        <h3>{level}</h3>
        <p>{institute} <br /> {city}, Bangladesh</p>
    </div>
);


const Education = () => {

    useEffect(() => {

    }, [])

    return (
        <section id="education" className="education">

            <h1 className="heading">My <span>Education</span></h1>

            <div className="box-container">
                {
                    data.education.slice(0).reverse().map(edu => (
                        <Institute key={edu.year} org={edu} />
                    ))
                }
            </div>
        </section>
    );
}

export default Education;