import React from "react";
import { SidebarWidget, HeaderWidget } from "@/widgets";
import { MainLayoutStyled } from "./styled";

const MainLayout = ({ children, title }) => {
  return (
    <MainLayoutStyled>
      <SidebarWidget />
      <div className="main_content">
        <HeaderWidget title={title} />
        <div className="content_area">{children}</div>
      </div>
    </MainLayoutStyled>
  );
};

export default MainLayout;
