import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinners from "../components/Spinners";

const Jobpage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.log("Error was found ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);
  return (
    <>{Loading ? <Spinners loading={Loading} /> : <div>{job.title}</div>}</>
  );
};

export default Jobpage;
