import ButtonGradient from "./assets/svg/ButtonGradient";
import Contact from "./components/4-contact/Contact";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
/* import Services from "./components/Services";
 */import Services from './components/service';
import Faqs from './components/Pricing';
import Widgets from "./components/Widgets";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Collaboration />
        <Contact />
        <Widgets />

       <Faqs />
        <Roadmap />

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
