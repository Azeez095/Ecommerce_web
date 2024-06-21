# React + Vite
Create vite app: "npx create-vite@latest . --template react"
/* Hero Section
npm i react-slick
npm i slick-carousel


add 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; to [main.jsx]
*/

/* Scrolling Animation */
use "npm i aos" and 
import aos into the app component
import "aos/dist/aos.css"; into the app component

add  to App.jsx
React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);