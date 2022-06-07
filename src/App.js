import { Header, Home, About, Education, Portfolio, Contact } from './components';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

  let message = '❤ Thank You! for showing your interest... \n\n🚩 If your are really interested to know about how all these things work,\nthem feel free to contact this site developer at this contact number : \n\n📞 +880 1717 416 412';

  const consoleText = `
    background: yellow; 
    font-size: 20px
  `;

  const consoleNumber = `
    background: #444; 
    color: yellow; 
    font-size: 40px
  `;


  useEffect(() => {

    // DISABLE the RIGHT CLICK for viewing the ==> View Page Source Code
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.log(`%c${message}`, consoleText);
      console.log('%c+880 1717 - 416 412 ', consoleNumber);
      alert(message);
    }, false);

    // DISABLE SHORTCUT KEY
    document.addEventListener('keypress', (e) => {
      if (e.ctrlKey || e.keyCode === 123) {
        e.stopPropagation();
        e.preventDefault();
        console.log(`%c${message}`, consoleText);
        console.log('%c+880 1717 - 416 412 ', consoleNumber);
        alert(message);
      }
    }, false);


    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 200, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });

  }, [message, consoleText, consoleNumber]);



  return (
    <>
      <Header />
      <main >
        <Home />
        <Portfolio />
        <About />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
