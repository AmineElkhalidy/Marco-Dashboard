import React, { useState } from "react";

// Pro Sidebar Components
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

// MUI
import { Box, IconButton, Typography } from "@mui/material";

// NavLink
import { Link } from "react-router-dom";

// Logo
import Logo from "../../assets/images/Logo.png";
import { ReactComponent as List } from "../../assets/svgs/list.svg";

const SideBar = ({ companyName }) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  // Extracting the company name

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          width: "218px",
          minWidth: "218px",
        },
        "& .ps-sidebar-container": {
          background: "#000223",
          minHeight: "100vh",
          height: "100%",
        },
        "& .ps-menu-button:hover": {
          background: "none !important",
        },
      }}
    >
      <Sidebar className="h-full">
        <Menu>
          {/* Logo */}
          {/* onClick={() => collapseSidebar()} */}
          <MenuItem>
            {!collapsed && (
              <Box mt={"2rem"}>
                <img src={Logo} alt="Gradesbar Logo" />
              </Box>
            )}
          </MenuItem>

          {/* Menu items */}
          <Box paddingLeft={collapsed ? undefined : "1%"} marginTop="2rem">
            <MenuItem icon={<List />}>
              <Link to="/companies" className="text-white font-medium">
                Company Lists
              </Link>
            </MenuItem>

            <Box paddingLeft="2.75rem">
              <MenuItem>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  {companyName}
                </Typography>
              </MenuItem>
            </Box>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
