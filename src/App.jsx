import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { Services } from "./views/Services";
import { Resume } from "./views/Resume";
import { Portfolio } from "./views/Portfolio";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { BackgroundPolygon1 } from "components/BackgroundPolygon1";
import { Routes, Route } from "react-router-dom";
import { WhatsAppWidget } from "components/WhatsAppWidget";
import { Video } from "components/Video";
export default function App() {
  return (
    <>
      <Header></Header>
      <>
        <Video />
        <BackgroundPolygon1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/website-design-and-seo-services"
            element={<Services />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppWidget />
      </>
    </>
  );
}
