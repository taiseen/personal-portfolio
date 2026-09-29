import ScrollIndicator from '../Utilities/ScrollIndicator';
import GoToTop from '../Utilities/GoToTop';
import SideBarNavigation from './Navigation';
import { useEffect, useRef } from 'react'
import { images } from '../../constants';

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

            <div className="user" title='Taiseen - Fullstack Developer '>
                <img src={images.me} alt="taiseen" loading='lazy' />
                <h3 className="name">Taiseen</h3>
                <p className="post">⚙️ Fullstack Developer 🛠️</p>
            </div>

            <SideBarNavigation />

            <div className="utilities ">
                <div id="themeToggling" className="flex items-center justify-center" onClick={toggleThemeColor}>
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