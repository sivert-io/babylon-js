import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { App } from "./App";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
