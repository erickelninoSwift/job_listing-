import React from "react";
import Homepage from "./pages/Homepage";
import Mainlayouts from "./layouts/Mainlayouts";
import Jobspage from "./pages/Jobspage";
import { NotfoundPage } from "./pages/NotfoundPage";
import Jobpage from "./pages/Jobpage";
import AddJobPage from "./pages/AddJobPage";
import EditJobpage from "./pages/EditJobpage";
import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = () => {
  const [JobAdded, setJobAdded] = useState("");
  const [editJob, setEditJob] = useState("");

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
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  const myEditJob = async (job) => {
    setEditJob(job);
  };

  const selectedJobtoEdit = (jobSelcted) => {
    console.log(jobSelcted);
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
        <Route
          path="/jobs/:id"
          element={<Jobpage deleteJob={deleteJob} editJob={myEditJob} />}
        />
        <Route
          path="/jobs/edit-job/:id"
          element={
            <EditJobpage
              jobToEdit={editJob}
              editJobJobonSubmit={selectedJobtoEdit}
            />
          }
        />
        <Route path="/*" element={<NotfoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
