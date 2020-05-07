import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "../store/store";
import {ErrorBoundary} from "../components/error/ErrorBoundary";

import {Main} from "./main/Main";

export const App = props => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};
