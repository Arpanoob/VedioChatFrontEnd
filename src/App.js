import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import { connectWithSocketIoServer } from "../../my-app/src/utils/wss";

function App() {
  useEffect(() => {
    connectWithSocketIoServer();
  }, []);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
