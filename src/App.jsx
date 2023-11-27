import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MeetUps from "./components/MeetUps";
import Socials from "./components/Socials";
import News from "./components/News";
import Community from "./components/Community";
import Events from "./components/Events";
import Newsletter from "./components/Newsletter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="outline">
        <Navbar />
        <Hero />
        <div className="ml-[2rem]">
        <MeetUps />
        <Socials />
        <News />
        <Community />
        </div>
       
        <Events />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
