import { useEffect } from "react"
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {

    useEffect(() => {

        ReactGA.initialize("G-ZFNQLDZ924");

        // Send pageView with a custom path
        ReactGA.send({
            hitType: "pageView",
            page: window.location.pathname,
            title: "Home Page"
        });

    }, []);

    return null
}

export default GoogleAnalytics;