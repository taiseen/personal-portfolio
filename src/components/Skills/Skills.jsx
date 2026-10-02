import { useEffect } from 'react'
import { data } from '../../constants'

const SkillBox = ({ skill: { name, percent } }) => (
    <div className="relative w-full my-8 grid grid-cols-1 md:grid-cols-[15rem_1fr] justify-center items-center text-[var(--color-white)] md:mb-8 max-[768px]:mb-12" data-aos={"fade-down"}>
        <h4 className="text-[2rem] max-[768px]:text-[2.5rem] max-[768px]:mb-2">{name}</h4>
        <div className="relative w-full h-[0.8rem] bg-[var(--color-white)] rounded-[0.5rem]">
            <div className="absolute top-0 left-0 h-full rounded-[0.5rem] bg-(--color-yellow)" style={{ width: `${percent}%` }}>
                <span className="absolute -top-5 right-[10px] text-[1.5rem] text-[var(--color-white)] max-[768px]:-top-[25px] max-[768px]:text-[1.8rem]">{percent}%</span>
            </div>
        </div>
    </div>
)

const Skills = () => {

    useEffect(() => {

    }, [])


    return (
        <section id="skills" className="min-h-screen p-4 max-[480px]:p-2">
            <h1 className="text-center mx-[3rem] md:mx-[6rem] text-[4rem] p-4 border-b border-[var(--color-white)]/40 text-[var(--color-white)]">
                My <span className="text-[var(--color-yellow)]">Expertise</span>
            </h1>
            <div className="p-4 md:p-16">
                {
                    data.skills?.map(skill => (
                        <SkillBox key={skill.id} skill={skill} />
                    ))
                }
            </div>
        </section>
    );
}

export default Skills;
