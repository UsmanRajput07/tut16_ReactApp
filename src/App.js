import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { RoutesArry } from "./Routes/Routes";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RoutesArry.map((curentValue) => {
            return (
              <Route
                path={curentValue.path}
                element={curentValue.element}
              ></Route>
            );
          })}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
