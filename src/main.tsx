import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./components/app/app.tsx";
import { Provider } from "react-redux";
import { store } from "./services/store.ts";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
