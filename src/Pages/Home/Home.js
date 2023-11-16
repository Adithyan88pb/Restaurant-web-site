import React from "react";
import Welcome from "../Welcome/Welcome";
import Patner from "../Patner/Patner";
import Booking from "../Booking/Booking";
import Dishes from "../Dishes/Dishes";
import Ambience from "../Ambience/Ambience";
import Delivery from "../Delivery/Delivery";
function Home() {
  return (
    <>
      <Welcome />
      <Patner/>
      <Booking/>
      <Dishes/>
      <Ambience/>
      <Delivery/>
    </>
  );
}

export default Home;
