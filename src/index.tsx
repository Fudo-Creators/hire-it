import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Js from "./pages/main/js/Js";
import JsTasks from "./pages/main/js/JsTask/JsTask";
import JsQuestions from "./pages/main/js/JsQuestions/JsQuestions";
import NotFound from "./pages/notFound/NotFound";
import infoForHardWorkers from "./utils/InfoForHardWorkers";

import "antd/dist/antd.css"; // Включает стандартные стили каждому AntD компоненту.

infoForHardWorkers();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/JsQuestions" element={<JsQuestions />} />
        <Route path="/JsTasks" element={<JsTasks />} />
        <Route path="/ts" element={<NotFound />} />
        <Route path="/react" element={<NotFound />} />
        <Route path="/vue" element={<NotFound />} />
        <Route path="/angular" element={<NotFound />} />
        <Route path="/other" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
