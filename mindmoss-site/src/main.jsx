import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { LibraryProvider } from "./context/LibraryProvider.jsx";
import { DevLogProvider } from "./context/DevLogProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LibraryProvider>
      <DevLogProvider>
        <App />
      </DevLogProvider>
    </LibraryProvider>
  </StrictMode>
);
