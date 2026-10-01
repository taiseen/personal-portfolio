import { useEffect, useState } from 'react';
import { images } from '../../constants';

const GoToTop = () => {

    const [goToTop, setGoToTop] = useState(false);

    const goToTopFunction = () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setGoToTop(true);
        } else {
            setGoToTop(false);
        }
    }

    useEffect(() => window.addEventListener("scroll", goToTopFunction), []);


    return (
        <a
            href="/#home"
            className={`fixed bottom-[3rem] right-[2rem] z-[100] w-[5rem] transition-transform .5s-linear origin-bottom-right ${goToTop ? 'scale-100' : 'scale-0'}`}
        >
            <img
                className="w-full"
                src={images.up}
                alt="up-arrow"
                loading='lazy'
            />
        </a>
    )
}

export default GoToTop;
