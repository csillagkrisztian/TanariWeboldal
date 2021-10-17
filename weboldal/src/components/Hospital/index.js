import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../components/404";

export default function Hospital({ hospitals }) {
  const params = useParams();
  console.log("params", params, hospitals);
  const hospital = hospitals.find((hospital) => {
    return hospital.id === params.hospitalId;
  });

  if (!hospital) {
    return <NotFound></NotFound>;
  }

  return (
    <div>
      <img src={hospital.kep}></img>
      {params.hospitalId}
    </div>
  );
}
