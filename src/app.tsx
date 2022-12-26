import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./app.style";
import { Auth } from "./auth";
import { router } from "./auth/auth.router";

function App() {
  return (
    <HashRouter>
      <div id="app">
        <GlobalStyle />
        <Auth />
        <Routes>
          <Route
            path={router.MAIN}
            element={<Navigate to={router.SIGN_UP} replace={true} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
