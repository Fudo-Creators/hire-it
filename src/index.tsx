import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Js from "./pages/main/js/Js";
import Ts from "./pages/main/ts/Ts";
import ReactJs from "./pages/main/react/ReactJs";
import VueJs from "./pages/main/vue/VueJs";
import AngularJs from "./pages/main/angular/AngularJs";
import Other from "./pages/main/other/Other";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/js" element={<Js />} />
        <Route path="/ts" element={<Ts />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/vue" element={<VueJs />} />
        <Route path="/angular" element={<AngularJs />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
