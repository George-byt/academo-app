import React from "react";
import Albums from "./Albums";
import Video from "./Video";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <Video />
      <Albums />
    </section>
  )
}

export default Dashboard;
