import { ReactTyped } from 'react-typed';
import { data } from '../../constants';

const Home = () => {

    const introLines = [
        'Md Taiseen Azam. . . 🤗',
        'a Web Developer 🔗',
        'a Front-end Developer 🎨',
        'a Deep Learner 🧐',
    ];

    return (
        <section id="home" className="flex flex-col justify-center px-[1.5rem] md:px-[15rem] min-h-screen p-4 max-[480px]:px-[1.5rem]">

            <h3 className="normal-case text-[2.5rem] text-[var(--color-white)] max-[480px]:my-4">Hi there... 👋</h3>
            <h1 className="text-[3.2rem] md:text-[3.5rem] text-[var(--color-white)]">
                I'm <span className="auto-input pl-4 normal-case text-[var(--color-yellow)]"><ReactTyped strings={introLines} typeSpeed={80} backSpeed={30} loop={true} /></span>
            </h1>
            <div className="py-4 text-justify text-[2.5rem] text-[red]">
                "<span className="text-[var(--color-yellow)]">As-Salamu-Alaikum</span>"
                <span className="normal-case text-[var(--color-white)]">
                    {data.mySpeech}
                </span>
            </div>

            <a href="/#about" className="inline-block w-max py-[1.1rem] px-[2.2rem] mt-4 mr-8 bg-(--color-leftside) text-[var(--color-white)] cursor-pointer text-[2rem] rounded-[2rem] transition-colors duration-300 hover:bg-(--color-yellow) hover:text-(--color-education)">
                About Me
                <i className="fas fa-user pl-4 text-[1.8rem]"></i>
            </a>

        </section>
    )
}

export default Home
