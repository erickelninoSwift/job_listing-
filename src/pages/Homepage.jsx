import React from "react";
import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import JobsListing from "../components/JobsListing";
import ViewAllJobs from "../components/ViewAllJobs";
const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <JobsListing isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
