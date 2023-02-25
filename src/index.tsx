import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import "./i18n.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
