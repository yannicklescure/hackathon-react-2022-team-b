import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from '../pages/Homepage';
import Faq from "../pages/Faq";
import Loading from "./Loading";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Footer from "./Footer";
import styled from "styled-components";

const App = () => {
  const [isLoadead, setIsLoadead] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadead(true);
    }, 1500);
  }, []);

  const router = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
  ];

  return (
    <>
      <GlobalStyles />
      {!isLoadead ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Navbar />
            <Routes>
              {router.map(route => <Route path={route.path} element={route.element} />)}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Container>
          <Footer />
        </>
      )}
    </>
  )
};

const Container = styled.div`
  min-height: 100vh;
`;

export default App;