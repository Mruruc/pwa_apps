import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/routes";
import { useState } from "react";
import SettingContext from "./context/SettingContext";

const routes = createBrowserRouter([appRoutes]);

function WeatherApp() {
  const [trashHold, setTrashHold] = useState({
    value: localStorage.getItem("tempThreshold") || "",
    type: localStorage.getItem("tempThresholdType") || "",
  });
  return (
    <>
      <SettingContext.Provider value={{ trashHold, setTrashHold }}>
        <RouterProvider router={routes} />
      </SettingContext.Provider>
    </>
  );
}

export default WeatherApp;
