import { useEffect, useRef } from 'react'
import { data } from '../../constants';

const Navigation = () => {

    const navLinks = useRef();

    useEffect(() => {

        const handleScroll = () => {
            let top = window.scrollY;

            document.querySelectorAll('section').forEach(section => {
                let height = section.offsetHeight;
                let offset = section.offsetTop - 150;
                let id = section.getAttribute('id');

                if (id && top >= offset && top < offset + height) {

                    navLinks.current?.querySelectorAll('a').forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                };
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <nav className="w-full py-4 px-12" ref={navLinks}>
            {
                data.navbarMenu.map(({ path, link }) => (
                    <a
                        href={path}
                        key={path}
                        title={link}
                        className="block py-4 my-6 rounded-[0.8rem] bg-[var(--color-rightside)] text-[2.2rem] text-[var(--color-white)] no-underline text-center transition-colors duration-300 hover:bg-(--color-yellow) hover:text-(--color-education) [&.active]:bg-(--color-yellow) [&.active]:text-[var(--color-education)]"
                    >
                        {link}
                    </a>
                ))
            }
        </nav>
    )
}

export default Navigation;
