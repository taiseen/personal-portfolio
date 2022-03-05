import React, { useEffect } from 'react'
import { data } from '../../constants'
import './Skills.scss'

const SkillBox = ({ skill: { name, percent } }) => (
    <div className="box" data-aos={"fade-down"}>
        <h4>{name}</h4>
        <div className="percent">
            <div className="progressColor" style={{ width: `${percent}%` }}>
                <span>{percent}%</span>
            </div>
        </div>
    </div>
)

const Skills = () => {

    useEffect(() => {

    }, [])

    
    return (
        <section id="skills" className="skills">
            <h1 className="heading">My <span>Expertise</span></h1>
            <div className="skills-container">
                {
                    data.skills.map(skill => (
                        <SkillBox key={skill.id} skill={skill} />
                    ))
                }
            </div>
        </section>
    );
}

export default Skills;