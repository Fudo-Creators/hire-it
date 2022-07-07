import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JsQuestions from "./pages/main/js/JsQuestions/JsQuestions";
import JsTasks from "./pages/main/js/JsTask/JsTask";
import JsRecomendations from "./pages/main/js/JsRecomendations/JsRecomendations";

import Ts from "./pages/main/ts/Ts";
import ReactJs from "./pages/main/react/ReactJs";
import VueJs from "./pages/main/vue/VueJs";
import AngularJs from "./pages/main/angular/AngularJs";
import NotFound from "./pages/notFound/NotFound";
import infoForHardWorkers from "./utils/InfoForHardWorkers";

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
        <Route path="/JsRecomendations" element={<JsRecomendations />} />
        <Route path="/ts" element={<Ts />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/vue" element={<VueJs />} />
        <Route path="/angular" element={<AngularJs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
