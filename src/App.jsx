import Header from "./Components/Header";
import { Home } from "./Components/Home";
import ClientLogoImg from "./Components/ClientLogo";
import AboutUs from "./Components/AboutUs";
import { ServicesHeading } from "./Components/ServicesHeading.jsx";
import ServicesCard from "./Components/ServicesCard.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <ClientLogoImg />
      <AboutUs />
      <ServicesHeading />
      <ServicesCard />
    </>
  );
};
export default App;
