import React from "react";
import Jobs from "../jobs.json";
import Job from "./Job";

const JobsListing = () => {
  const recentJobs = Jobs.jobs.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((data, index) => {
            const { id } = data;
            return <Job key={id} positionDetails={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default JobsListing;