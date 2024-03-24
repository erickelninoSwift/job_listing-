import React from "react";

import Job from "./Job";
import { useState, useEffect } from "react";
import Spinners from "./Spinners";

const JobsListing = ({ isHome = false }) => {
  const [loadAll, setLoadAll] = useState(false);
  const [apiJobs, setApiJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const recentJobs = isHome
    ? loadAll
      ? apiJobs
      : apiJobs.slice(0, 3)
    : apiJobs;

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(() => true);
        const response = await fetch("http://localhost:8000/jobs");
        const alldata = await response.json();
        setApiJobs(() => {
          return alldata;
        });
      } catch (error) {
        console.error("Error found while loading data", error);
      } finally {
        console.log("done loading");
        setLoading(() => false);
      }
    };
    data();
  }, []);

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

          <>
            {loading ? (
              <Spinners loading={loading} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentJobs.map((data, index) => {
                  const { id } = data;
                  return <Job key={id} positionDetails={data} />;
                })}
              </div>
            )}
          </>
        </div>
      </section>
    </>
  );
};

export default JobsListing;
