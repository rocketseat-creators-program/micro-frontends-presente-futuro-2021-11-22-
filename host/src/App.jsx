import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";

import { System } from "./utils/loadComponents";
import { Page } from "./Main";
import ErrorBoundary from "./Error";

const RemoteButton = React.lazy(() => import("dsl/Button"));

const App = () => {
  return (
    <Page>
      <Suspense fallback="Loading..">
        <ErrorBoundary>
          <RemoteButton />
        </ErrorBoundary>
      </Suspense>
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
