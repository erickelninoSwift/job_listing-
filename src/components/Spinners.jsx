import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Spinners = ({ loading }) => {
  const overide = {
    display: "flex",
    margin: "0px auto",
  };
  return (
    <PuffLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overide}
      size={120}
    />
  );
};

export default Spinners;
