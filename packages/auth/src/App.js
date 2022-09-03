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

const App = ({ history, onSignIn }) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>  
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};

export default App;
