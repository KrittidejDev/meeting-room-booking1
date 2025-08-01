import React from "react";
import { DashboardContainer } from "./styled";


const Dashboard = () => {
  return (
    <DashboardContainer>
      <div>Menu</div>

      {/*Content*/}
      <div>
        <div>bar</div>
          <div>Profile/Login/Logout</div>
          <div>subbar</div>

        <div>box-section1</div>
        <div>box-section2</div>

        
      </div>
      <div className="container">
        <div className="title">Dashboard</div>
        <div className="subtitle">Dashboard</div>
      </div>
    </DashboardContainer>
  )
};

export default Dashboard;
