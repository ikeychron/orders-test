import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProviderOrder from "./contexts/orderContext";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderOrder>
        <App />
      </ProviderOrder>
    </BrowserRouter>
  </React.StrictMode>
);

