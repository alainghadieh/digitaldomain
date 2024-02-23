import {BackgroundPolygon1} from "./components/BackgroundPolygon1";
import {BackgroundPolygon2} from "./components/BackgroundPolygon2";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Services } from "./views/Services";
import { Resume } from "./views/Resume";
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center">
        <BackgroundPolygon1 />
        <div className="mx-auto max-w-screen-lg lg:py-28 sm:py-6 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/website-design-and-seo-services" element={<Services />} />
          </Routes>
        </div>
        <BackgroundPolygon2 />
      </div>
      <Footer />
    </>
  );
}
