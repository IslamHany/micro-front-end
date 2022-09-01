import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignUp from "./components/Signup";
import Signin from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au", //generate class names in production prefixed with ma
});

const App = ({ history }) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};

export default App;
