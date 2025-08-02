import React from "react";
import { HeaderWidgetContainer } from "./styled";
import { Displays } from "@/components";

const HeaderWidget = ({ title }) => {
  const user = {
    name: "John Doe",
    avatar: "/images/icons/avatar.jpg",
  };

  return (
    <HeaderWidgetContainer>
      <div className="header_content">
        <div className="header_left">
          <h1 className="page_title">{title}</h1>
        </div>
        <div className="header_right">
          <div className="user_info">
            <Displays.Avatar srcImg={user.avatar} alt={user.name} />
            <span className="user_name">{user.name}</span>
          </div>
          <button className="logout_btn">Logout</button>
        </div>
      </div>
    </HeaderWidgetContainer>
  );
};

export default HeaderWidget;
