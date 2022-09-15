import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// Pages Imports
import Homepage from '../pages/Homepage';
import Faq from "../pages/Faq";
import BuyAticket from "../pages/BuyAticket";
import LaunchHistory from "../pages/LaunchHistory";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Complaint from "../pages/Complaint";
import AboutUs from "../pages/AboutUs";

// Others
import Loading from "./Loading";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Footer from "./Footer";
import styled from "styled-components";
import Confirmation from "../pages/Confirmation";

const App = () => {
  const [isLoadead, setIsLoadead] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadead(true);
    }, 1500);
  }, []);

  const router = [
    {
      path: "/",
      element: <Homepage navbarHeight={navbarHeight} />,
    },
    {
      path: "/buy-a-ticket",
      element: <BuyAticket />,
    },
    {
      path: "/launch-history",
      element: <LaunchHistory />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/politique-de-confidentialite",
      element: <PrivacyPolicy />,
    },
    {
      path: "/formulaire-de-plaite",
      element: <Complaint />,
    },
    {
      path: "/ticket",
      element: <Confirmation />,
    },
    {
      path: "/About-us",
      element: <AboutUs />,
    },
  ];

  const location = useLocation();
  console.log(location);

  return (
    <>
      <GlobalStyles />
      {!isLoadead ? (
        <Loading />
      ) : (
        <>
          <Container>
            {location.pathname !== '/ticket' && <Navbar setNavbarHeight={setNavbarHeight} />}
            
            <Routes>
              {router.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Container>
          {location.pathname !== '/ticket' && <Footer />}
        </>
      )}
    </>
  )
};

const Container = styled.div`
  min-height: 100vh;
`;

export default App;