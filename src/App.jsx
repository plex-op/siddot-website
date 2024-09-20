import Header from "./Components/Header";
import { Home } from "./Components/Home";
import ExperienceStats from "./Components/ExperienceStats.jsx";
import About from "./Components/About.jsx";
// // import AboutUs from "./Components/AboutUs";
// // import { ServicesHeading } from "./Components/ServicesHeading.jsx";
// // import ServicesCard from "./Components/ServicesCard.jsx";
import { ServicesSection } from "./Components/ServicesSection.jsx";
import Footer from "./Components/Footer.jsx";
import ServiceCard from "./Components/ServiceCard.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <ExperienceStats />
      {/* <AboutUs /> */}
      <About />
      <ServiceCard />
      <ServicesSection />
      <Footer />
    </>
  );
};
export default App;
