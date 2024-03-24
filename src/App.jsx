import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import JobsListing from "./components/JobsListing";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Homecard />
        <JobsListing />
      </div>
    </>
  );
};

export default App;
