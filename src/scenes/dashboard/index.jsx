import React, { useState } from "react";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// MUI
import { Box, IconButton, Typography, Tabs, Tab, AppBar } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// DataGrid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// Icons
import { Search } from "@mui/icons-material";
import { ReactComponent as Delete } from "../../assets/svgs/Remove.svg";

// Components
import SideBar from "../global/Sidebar";
import AddCompany from "../company/AddCompany";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";

// data
import { companiesList } from "../../data/data";

const Dashboard = () => {
  // Drawer State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Columns
  const columns = [
    { field: "id", headerName: "Company ID", headerAlign: "left" },
    {
      field: "companyName",
      headerName: "Company Name",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "loaction",
      headerName: "Location",
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      flex: 1,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: "lastLoggedin",
      headerName: "Last Logged in",
      type: "date",
      flex: 1,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: "active",
      headerName: "Active",
    },
    {
      field: "action",
      headerName: "Action",
    },
    {
      field: "remove",
      headerName: "Remove",
      renderHeader: () => <Delete />,
    },
  ];
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

        {/* Add Company */}
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
          <button
            className="bg-textColor py-[12px] px-[40px] rounded-[10px] text-white"
            onClick={() => setIsDrawerOpen(true)}
          >
            New company +
          </button>
        </Box>

        {/* Table */}
        <Box
          marginX="1rem"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              border: "none",
            },
          }}
        >
          <DataGrid checkboxSelection rows={companiesList} columns={columns} />
        </Box>

        <AddCompany
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
