import React from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router";
import { AccountContext } from "../Account";

const RouteWithLayout = (props) => {
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
