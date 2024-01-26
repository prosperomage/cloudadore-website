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
  return (
    <>
      <div className="">
        <Navbar />

        <div className="outline-dotted">
          <Hero />
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
