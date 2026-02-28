import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoadingProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </LoadingProvider>
  </BrowserRouter>
);
