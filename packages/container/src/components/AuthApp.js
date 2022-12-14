import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = (props) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname)
          history.push(nextPathname);
      },
      onSignIn: () => {
        props.onSignIn(true);
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
