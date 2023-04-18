import React, { useState } from "react";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// MUI
import { Box, IconButton, Typography, Tabs, Tab, AppBar } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// DataGrid
import { DataGrid } from "@mui/x-data-grid";

// Icons
import { Search } from "@mui/icons-material";
import { ReactComponent as Remove } from "../../assets/svgs/Remove.svg";

// Components
import SideBar from "../global/Sidebar";
import AddCompany from "../company/AddCompany";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";
import Mcdonald from "../../assets/svgs/mc.svg";
import IcEmail from "../../assets/svgs/ic-email.svg";
import Calendar from "../../assets/svgs/ic-calendar-days.svg";
import Edit from "../../assets/svgs/edit.svg";
import Delete from "../../assets/svgs/delete.svg";
import Favorite from "../../assets/svgs/favorite.svg";
import NotFavorite from "../../assets/svgs/No-Favorite.svg";

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
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center gap-2">
          <img className="w-10 h-10" src={Mcdonald} alt="Company Logo" />
          <Typography>{params.value}</Typography>
        </div>
      ),
      flex: 1,
    },
    {
      field: "loaction",
      headerName: "Location",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center gap-2">
          <img className="w-6 h-6" src={IcEmail} alt="Company Location" />
          <Typography>{params.value}</Typography>
        </div>
      ),
      flex: 1,
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      // type: 'date',
      // valueGetter: (params) => new Date(params.value),

      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center gap-2">
          <img className="w-6 h-6" src={Calendar} alt="Company Calendar" />
          <Typography>{params.value}</Typography>
        </div>
      ),
      flex: 1,
    },
    {
      field: "lastLoggedin",
      headerName: "Last Logged in",
      // type: "date",
      // valueGetter: (params) => new Date(params.value),
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center gap-2">
          <img className="w-6 h-6" src={Calendar} alt="Company Calendar" />
          <Typography>{params.value}</Typography>
        </div>
      ),
      flex: 1,
    },
    {
      field: "active",
      headerName: "Active",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <span className="inline-block px-6 py-2 bg-[#2FE5A7] rounded-full">
          {params.value}
        </span>
      ),
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center gap-2">
          <button>
            <img src={Edit} alt="Edit SVG" />
          </button>
          <button>
            <img src={Delete} alt="Delete SVG" />
          </button>
        </div>
      ),
    },
    {
      field: "remove",
      headerName: "Remove",
      renderHeader: () => <Remove />,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center h-full w-full justify-center">
          <button>
            <img src={Favorite} alt="Favorite SVG" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex relative">
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
          width="100%"
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
            className="bg-textColor py-[12px] px-[40px] rounded-[10px] text-white mr-8"
            onClick={() => setIsDrawerOpen(true)}
          >
            New company +
          </button>
        </Box>

        {/* Table */}
        <Box
          width="98%"
          height={500}
          m="0 auto"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "white",
              borderRadius: "10px",
              marginBlock: "5px",
              padding: "0 5px",
            },
            "& .MuiDataGrid-footerContainer": {
              border: "none",
            },
          }}
        >
          <DataGrid
            sx={{ width: "100%", height: "100%" }}
            checkboxSelection
            columns={columns}
            rows={companiesList}
          />
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
