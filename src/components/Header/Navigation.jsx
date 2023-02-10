import { useEffect, useRef } from 'react'
import { data } from '../../constants';
import './Header.scss';

const Navigation = () => {

    const navLinks = useRef();

    useEffect(() => {

        window.addEventListener("scroll", () => {

            document.querySelectorAll('section').forEach(section => {
                let top = window.scrollY;
                let height = section.offsetHeight;
                let offset = section.offsetTop - 150;
                let id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {

                    navLinks.current.childNodes.forEach(link => {
                        link.classList.remove('active');
                        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
                    });
                };
            });
        });
    }, [])


    return (
        <nav className="navbar" ref={navLinks}>
            {
                data.navbarMenu.map(({ path, link }) => (
                    <a href={path} key={path} title={link}>
                        {link}
                    </a>
                ))
            }
        </nav>
    )
}

export default Navigation;