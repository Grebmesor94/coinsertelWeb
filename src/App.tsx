import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { ServicesPage } from "./pages/ServicesPage";

export const App = () => {
  return (
    <div className="app-container">
      <HomePage />
      <Navbar />
      <AboutPage />
      <ServicesPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
