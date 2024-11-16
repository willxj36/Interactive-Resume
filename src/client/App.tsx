import { Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Home, Resume, Portfolio, AboutMe, Contact } from "./pages";
import { useThrottle } from "./shared/utils/hooks";

const App = () => {
  // #region mobile alert

  /**
   * states ensure alert is only opened once per visit
   */
  const [isMobileAlertOpen, setIsMobileAlertOpen] = useState<boolean>(false);
  const [hasUserDismissedMobileAlert, setHasUserDismissedMobileAlert] = useState<boolean>(false);

  /**
   * opens modal warning mobile-responsiveness not set up yet only if it's not already open and
   * hasn't been opened and dismissed
   */
  const handleIsMobile = useCallback(() => {
    if (window.innerWidth <= 760 && !hasUserDismissedMobileAlert && !isMobileAlertOpen) {
      setIsMobileAlertOpen(true);
      Modal.warning({
        title: "Mobile device detected",
        content: "This website is best viewed on a tablet or desktop. Optimization for mobile devices coming soon!",
        onClose: () => {
          setHasUserDismissedMobileAlert(true);
          setIsMobileAlertOpen(false);
        },
        okText: "Dismiss",
        destroyOnClose: true,
      });
    }
  }, [isMobileAlertOpen, hasUserDismissedMobileAlert, setIsMobileAlertOpen, setHasUserDismissedMobileAlert]);

  const throttledHandleIsMobile = useThrottle(handleIsMobile, 500);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleIsMobile);

    return () => window.removeEventListener("resize", throttledHandleIsMobile);
  }, [throttledHandleIsMobile]);

  // #endregion mobile alert

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume/:section?" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
