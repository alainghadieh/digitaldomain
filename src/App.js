import {BackgroundPolygon1} from "./BackgroundPolygon1";
import {BackgroundPolygon2} from "./BackgroundPolygon2";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Resume } from "./pages/Resume";
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar></NavBar>
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
