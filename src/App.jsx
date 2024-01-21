import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer";

function App() {
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleShowPage() {
      if (window.innerWidth >= 1280) {
        setMobileMode(false);
      } else {
        setMobileMode(true);
      }
    }
    // handleShowPage();

    window.addEventListener("resize", handleShowPage);

    return () => {
      window.removeEventListener("resize", handleShowPage);
    };
  }, []);


  return !mobileMode ? (
    <body className="h-fit w-screen flex flex-col leading-10">
      <Header />
      <Home />
      <Footer/>
    </body>
  ) : (
    <div className="flex h-screen w-screen justify-center items-center bg-[red] bg-gradient-to-br">
      <p className="text-white font-Righteous">
        This Site currently not available in MobileMode{" "}
      </p>
    </div>
  );
}

export default App;
