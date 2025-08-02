"use client";
import React, { useState, useEffect } from "react";
import { SidebarWidgetStyled } from "./styled";
import { Icons } from "@/components";
import { useRouter } from "next/navigation";

const SidebarWidget = () => {
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  // Check if current path is a submenu item and keep parent menu open
  const isSubmenuActive = (item) => {
    if (item.submenu) {
      return item.submenu.some((subItem) => router.pathname === subItem.path);
    }
    return false;
  };

  // Auto-open parent menu if submenu is active
  useEffect(() => {
    MENU_LIST.forEach((item) => {
      if (isSubmenuActive(item)) {
        setOpenMenus((prev) => ({
          ...prev,
          [item.key]: true,
        }));
      }
    });
  }, [router.pathname]);

  return (
    <SidebarWidgetStyled>
      <div className="sidebar_header">Logo {/* <Icons.Logo /> */}</div>
      <div className="sidebar_title">Dashboard</div>
      <nav className="sidebar_nav">
        {MENU_LIST.map((item) => (
          <div key={item.key} className="menu_item">
            <div
              className={`menu_link ${
                router.pathname === item.path || isSubmenuActive(item)
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                if (item.submenu) {
                  toggleMenu(item.key);
                } else {
                  navigateTo(item.path);
                }
              }}
            >
              <span className="menu_icon">{item.icon}</span>
              <span className="menu_label">{item.label}</span>
              {item.submenu && (
                <span
                  className={`menu_arrow ${
                    openMenus[item.key] || isSubmenuActive(item) ? "open" : ""
                  }`}
                >
                  <Icons.ArrowRight />
                </span>
              )}
            </div>
            {item.submenu && (openMenus[item.key] || isSubmenuActive(item)) && (
              <div className="submenu">
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.key}
                    className={`submenu_link ${
                      router.pathname === subItem.path ? "active" : ""
                    }`}
                    data-submenu={subItem.key}
                    onClick={() => navigateTo(subItem.path)}
                  >
                    <span className="submenu_icon" />
                    <span className="submenu_label">{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </SidebarWidgetStyled>
  );
};

const MENU_LIST = [
  {
    key: "dashboard",
    label: "แดชบอร์ด",
    path: "/dashboard",
    // icon: <Icons.MenuDashboard />,
  },
];

export default SidebarWidget;
