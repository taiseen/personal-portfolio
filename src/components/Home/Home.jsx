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
        <section id="home" className="home">

            <h3>Hi there... 👋</h3>
            <h1>I'm <span className="auto-input"><ReactTyped strings={introLines} typeSpeed={80} backSpeed={30} loop={true} /></span></h1>
            <div className="myQuotes">
            "<span className="salam">As-Salamu-Alaikum</span>" 
                <span className="mySpeech">
                    {data.mySpeech}
                </span>
            </div>

            <a href="/#about" className="btn">
                About Me
                <i className="fas fa-user"></i>
            </a>

        </section>
    )
}

export default Home