import React from "react";
import Homepage from "./pages/Homepage";
import Mainlayouts from "./layouts/Mainlayouts";
import Jobspage from "./pages/Jobspage";
import { NotfoundPage } from "./pages/NotfoundPage";
import Jobpage from "./pages/Jobpage";
import AddJobPage from "./pages/AddJobPage";
import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = () => {
  const [JobAdded, setJobAdded] = useState("");

  const addJob = async (newJob) => {
    setJobAdded(() => {
      return newJob;
    });
    return (response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    }));
  };

  const deleteJob = async (id) => {
    console.log(id);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayouts />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobonSubmit={addJob} />}
        />
        <Route path="/jobs/:id" element={<Jobpage deleteJob={deleteJob} />} />
        <Route path="/*" element={<NotfoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
