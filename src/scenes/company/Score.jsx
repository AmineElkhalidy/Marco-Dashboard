import React, { useState } from "react";

// Routing
import { Link, useParams } from "react-router-dom";

// MUI
import {
  Box,
  IconButton,
  Typography,
  Switch,
  TextField,
  Checkbox,
} from "@mui/material";

// Sidebar
import SideBar from "../global/Sidebar";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";
import Mcdonald from "../../assets/svgs/mc.svg";
import MenuSVG from "../../assets/svgs/menu.svg";

const Score = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="w-full flex relative ">
      <SideBar />

      {/* Content */}
      <div className="w-full bg-bgColor">
        {/* Company Info + Profile */}
        <Box position="relative w-full" p={2}>
          {/* Company Logo + name */}
          <Box display="flex" alignItems="center" gap={2}>
            <img src={Mcdonald} alt="Company Logo" />
            <Typography
              className="text-textColor"
              sx={{ fontWeight: 700, fontSize: "26px" }}
            >
              Mcdonald's
            </Typography>
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

        {/* Header tab */}
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={4}
          px={2}
        >
          <Box>
            <ul className="flex items-center gap-2">
              <li className="w-[230px] h-[60px] text-textColor  rounded-[10px] text-center flex items-center justify-center">
                <Link to={`/company/${id}`} className="text-xl">
                  Company Information
                </Link>
              </li>

              <li className="w-[230px] h-[60px] bg-textColor text-white rounded-[10px] text-center flex items-center justify-center">
                <Link to="#" className="text-xl">
                  Score
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to={`/company/${id}/unique`} className="text-xl">
                  Unique
                </Link>
              </li>
            </ul>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ fontSize: "20px" }}>Active:</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>

        {/* Content to be edited */}
        <div className="w-full flex gap-6 px-4 mb-4">
          <div className="p-4 bg-white rounded-[10px] w-full">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-lg font-medium">Scores detailed</h3>
              <button className="">See More</button>
            </div>

            <div className="w-full scores mt-3">
              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+10</span>
                <span className="mx-2 text-[14px] ">Website</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">Email</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">Number</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">Social Media 1</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">Social Media 2</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">Social Media 3</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+5</span>
                <span className="mx-2 text-[14px] ">
                  Company under 6m - 12m
                </span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+15</span>
                <span className="mx-2 text-[14px] ">
                  Company under 12m - 24m
                </span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+20</span>
                <span className="mx-2 text-[14px] ">Company over 24m</span>
              </div>

              <div className=" rounded-[2px] ">
                <Checkbox />
                <span className="mx-2 text-[14px] ">+15</span>
                <span className="mx-2 text-[14px] ">Registered Business</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-[10px] w-[50%]">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-lg font-medium">Total Score</h3>
              <button onClick={() => {}} className="">
                <img src={MenuSVG} alt="Menu" />
              </button>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="radial-progress text-textColor "
                style={{
                  "--value": 70,
                  "--size": "12rem",
                  "--thickness": "16px",
                }}
              >
                <p className="text-4xl font-semibold text-textColor">90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
