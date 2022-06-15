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

    const topStyling = {
        position: 'fixed',
        bottom: '3rem',
        right: '2rem',
        zIndex: '100',
        width: '5rem',
        transformOrigin: 'bottom right',
        transition: 'transform .5s linear',
        transform: goToTop ? 'scale(1)' : 'scale(0)',
    }


    useEffect(() => window.addEventListener("scroll", goToTopFunction), []);


    return (
        <a
            href="/#home"
            style={topStyling}
        >
            <img
                style={{ width: '100%' }}
                src={images.up}
                alt="up-arrow"
            />
        </a>
    )
}

export default GoToTop;