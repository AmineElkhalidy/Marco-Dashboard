import React, { useState } from "react";

// Routing
import { Link, useParams } from "react-router-dom";

// MUI
import { Box, IconButton, Typography, Switch, TextField } from "@mui/material";

// Sidebar
import SideBar from "../global/Sidebar";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";
import Mcdonald from "../../assets/svgs/mc.svg";
import EditSVG from "../../assets/svgs/edit.svg";
import UploadImage from "../../assets/images/upload.png";

const Unique = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(true);
  const [infoChange, setInfoChange] = useState(false);

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
              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to={`/company/${id}`} className="text-xl">
                  Company Information
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to={`/company/${id}/score`} className="text-xl">
                  Score
                </Link>
              </li>

              <li className="w-[230px] h-[60px] bg-textColor text-white rounded-[10px] text-center flex items-center justify-center">
                <Link to="#" className="text-xl">
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
        <Box width="100%">
          {/* Social Media */}
          <Box width="100%" px={2}>
            {!infoChange ? (
              <Box
                width="100%"
                sx={{ bgcolor: "white" }}
                paddingX={2}
                paddingY={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" flexDirection="column">
                  {/* Instagram */}
                  <Box>
                    <Typography
                      variant="h3"
                      className="text-textColor"
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        marginBottom: "10px",
                      }}
                    >
                      Dashboard Link
                    </Typography>
                    <Link
                      to={`/company/${id}/all-details`}
                      className="underline"
                    >
                      Testcompany.gradesbar.co.uk
                    </Link>
                    <Typography>Unique ID</Typography>
                  </Box>
                </Box>

                {/* Edit button */}
                <Box>
                  <button onClick={() => setInfoChange(true)}>
                    <img src={EditSVG} alt="Edit SVG" />
                  </button>
                </Box>
              </Box>
            ) : (
              <Box width="100%" bgcolor="white" py={3} px={4}>
                <Box component="form" width="100%">
                  <div className="grid grid-cols-2 gap-4">
                    <Box width="100%">
                      <TextField fullWidth label="Company email" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Unique ID" />
                    </Box>
                  </div>
                </Box>

                {/* Buttons Container */}
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  mt="2rem"
                >
                  <button
                    onClick={() => setInfoChange(false)}
                    className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
                  >
                    Update
                  </button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Unique;
