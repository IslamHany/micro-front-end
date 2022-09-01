import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MartketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: "co", //generate class names in production prefixed with ma
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MartketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
