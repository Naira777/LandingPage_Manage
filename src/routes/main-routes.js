import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { appRoutes, routes } from "./page-routes";

const MainRoutes = () => {
  const {isAuth}= useSelector(state => state.authorization);
  return (
    <Routes>
      {isAuth
        ? appRoutes?.map((item) => (
            <Route key={item.path} path={item.path} element={item.element}>
              {item.children?.map(item2 => (
                <Route key={item2.path} path={item2.path} element={item2.element} />
              ))}
            </Route>
          ))
        : routes?.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
    </Routes>
  );
};

export default MainRoutes;
