import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

// Pages
import Register from "./components/AuthPage/AuthPage";
import Layout from "./components/AuthPage/Login";
import Nayak from "./pages/Events/Nayak";
import EPlan from "./pages/Events/EPlan";
import ETalk from "./pages/Events/ETalk";
import ContentORama from "./pages/Events/ContentORama";
import MockIPLAuction from "./pages/Events/MockIPLAuction";
import GameOfStocks from "./pages/Events/GameOfStocks";
import InternshipFair from "./pages/Events/InternshipFair";
import PanelDiscussion from "./pages/Events/PanelDiscussion";

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
                <Sponsors ImageList={List} />;
                <Testimonials />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/auth" element={<Register />}></Route>
          <Route path="/auth/login" element={<Layout />}></Route>
          <Route path="/events/e-plan" element={<EPlan />}></Route>
          <Route path="/events/e-talk" element={<ETalk />}></Route>
          <Route
            path="/events/mock-ipl-auction"
            element={<MockIPLAuction />}
          ></Route>
          <Route
            path="/events/game-of-stocks"
            element={<GameOfStocks />}
          ></Route>
          <Route
            path="/events/internship-fair"
            element={<InternshipFair />}
          ></Route>
          <Route
            path="/events/panel-discussion"
            element={<PanelDiscussion />}
          ></Route>
          <Route
            path="/events/content-o-rama"
            element={<ContentORama />}
          ></Route>
          <Route path="/events/nayak" element={<Nayak />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
