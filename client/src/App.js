import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Register from "./components/AuthPage/AuthPage";
import Layout from "./components/AuthPage/Login";
import Speakers from "./components/Speakers/Speakers";
import Gallery from "./components/Gallery/Gallery";
import ButtonBacktoTop from "./components/ButtonBacktoTop/ButtonBacktoTop";

function App() {
  const List = [
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
    "./SponsorsImages/ecellLogo.png",
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <About />
                <Events />
<<<<<<< HEAD
                <Speakers />
                <Gallery />
                <Sponsors ImageList={List} />;
=======
                <Sponsors ImageList={List} />
>>>>>>> 3a8a71cdbd2d48e242d6e2cd1c18610a8920e81e
                <Testimonials />
                <Footer />
                <ButtonBacktoTop />
              </>
            }
          ></Route>
          <Route path="/auth" element={<Register />}></Route>
          <Route path="/auth/login" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
