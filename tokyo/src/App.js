import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="tokyo_tm_all_wrap">
      <AllRoutes />
      <ToastContainer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
