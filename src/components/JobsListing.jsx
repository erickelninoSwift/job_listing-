import React from "react";
import Jobs from "../jobs.json";
import Job from "./Job";
import { useState } from "react";
const JobsListing = () => {
  const [loadAll, setLoadAll] = useState(false);
  const recentJobs = loadAll ? Jobs.jobs : Jobs.jobs.slice(0, 3);
  const checkLoadAll = (e) => {
    e.preventDefault();
    setLoadAll(() => {
      return !loadAll;
    });
  };

  return (
    <>
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
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href={""}
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          onClick={(e) => checkLoadAll(e)}
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default JobsListing;
