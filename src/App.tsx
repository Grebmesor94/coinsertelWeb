import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { ServicesPage } from "./pages/ServicesPage";

export const App = () => {
  return (
    <>
      <HomePage />
      <Navbar />
      <AboutPage />
      <ServicesPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default App;
