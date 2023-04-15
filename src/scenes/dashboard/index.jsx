import React, { useState } from "react";

// MUI
import { Box, IconButton, Typography, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// Icons
import { Search, AddIcon } from "@mui/icons-material";

// Components
import SideBar from "../global/Sidebar";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";

const Dashboard = () => {
  return (
    <div className="w-full flex realtive">
      <SideBar />

      {/* Content */}
      <div className="w-full bg-bgColor">
        {/* Search input + Profile */}
        <Box position="relative" p={2}>
          {/* Search bar */}
          <Box
            display="flex"
            borderRadius="10px"
            borderColor="#787878"
            sx={{ background: "#FFF", width: "45%" }}
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <Search />
            </IconButton>
          </Box>

          {/* Profile */}
          <Box
            display="flex"
            gap={2}
            sx={{ position: "absolute", top: ".8rem", right: "1rem" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img
                className="bg-white rounded-lg"
                src={ProfileImage}
                alt="Profile photo"
              />

              <Box>
                <h3 className="text-sm">Username</h3>
                <span className="text-sm">Free Account</span>
              </Box>
            </Box>

            <IconButton>
              <img src={LogoutSVG} alt="Logout svg" />
            </IconButton>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginX="1rem"
          marginY="2rem"
        >
          <Typography
            variant="h2"
            className="text-textColor"
            sx={{ fontSize: "25px", fontWeight: 700 }}
          >
            Company lists
          </Typography>
          <button className="bg-textColor py-[12px] px-[40px] rounded-[10px] text-white ">
            New company +
          </button>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
