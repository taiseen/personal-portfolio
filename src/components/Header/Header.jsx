import ScrollIndicator from '../Utilities/ScrollIndicator';
import GoToTop from '../Utilities/GoToTop';
import Navigation from './Navigation';
import { useEffect, useRef } from 'react'
import { images } from '../../constants';
import './Header.scss';

const Header = () => {

    const menu = useRef();
    const close = useRef();
    const toggleTheme = useRef(null);

    const toggleMenu = () => {
        menu.current.classList.toggle('userClick');
        close.current.classList.toggle('fa-times');
    }

    const toggleThemeColor = () => {
        toggleTheme.current.classList.toggle('fa-moon');
        toggleTheme.current.classList.toggle('fa-sun');
        document.body.classList.toggle('userClick');
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            menu.current.classList.remove('userClick');
            close.current.classList.remove('fa-times');
        });
    }, [])


    return (
        <header id="header" ref={menu}>

            <div className="user" title='Taiseen - Frontend Developer '>
                <img src={images.me} alt="taiseen" loading='lazy' />
                <h3 className="name">Taiseen</h3>
                <p className="post"> 🎨 Frontend Developer 😎</p>
            </div>

            <Navigation />

            <div className="utilities">
                <div id="themeToggling" onClick={toggleThemeColor}>
                    <i className="fas fa-sun" ref={toggleTheme} ></i>
                </div>

                <div id="menu" className="fas fa-bars" onClick={toggleMenu} ref={close}></div>

                <ScrollIndicator />

                <GoToTop />
            </div>

        </header>
    );
}

export default Header;