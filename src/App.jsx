import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import Jobs from "./jobs.json";
import JobsListing from "./components/JobsListing";
const headerTitle = {
  title: " Become a React Dev",
  subtitle: "Find the React job that fits your skills and needs",
};
const App = () => {
  const AllJobs = Jobs.jobs;

  return (
    <>
      <div>
        <Navbar />
        <Hero title={headerTitle.title} subtitle={headerTitle.subtitle} />
        <Homecard />
        <JobsListing />
        <section className="m-auto max-w-lg my-10 px-6">
          <a
            href="jobs.html"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >
            View All Jobs
          </a>
        </section>
      </div>
    </>
  );
};

export default App;
