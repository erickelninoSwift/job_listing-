import React from "react";
import Homepage from "./pages/Homepage";
import Mainlayouts from "./layouts/Mainlayouts";
import Jobspage from "./pages/Jobspage";
import { NotfoundPage } from "./pages/NotfoundPage";
import Jobpage from "./pages/Jobpage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayouts />}>
      <Route index element={<Homepage />} />
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="/jobs/:id" element={<Jobpage />} />
      <Route path="/*" element={<NotfoundPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
