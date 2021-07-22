import React from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router";
import { AccountContext } from "../Account";

const RouteWithLayout = (props) => {
  /*
  Component that check the route and the status of the user's session
  If user is logged then renders a Layout and a Component (usually a Page)
  Else just redirect to the Login page
  */
  // ...rest takes the rest of the props and groups them in ...rest 
  const { layout: Layout, component: Component, ...rest } = props;
  
  const { getSession } = useContext(AccountContext);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const load = () => {
      getSession().then(async () => {
        setStatus(true);
      });
    };
    load();
  }, [getSession]);

  return (
    <Route
      {...rest}
      render={(matchProps) =>
          status ? (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: matchProps.location },
              }}
            />
          )
      }
    />
  );
};

export default RouteWithLayout;
