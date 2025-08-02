"use client";
import React from "react";
import { DashboardContainer } from "./styled";
import { Mainlayouts } from "@/components";

const Dashboard = () => {
  return (
    <Mainlayouts.MainLayout title="แดชบอร์ด">
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
    </Mainlayouts.MainLayout>
  );
};

export default Dashboard;
