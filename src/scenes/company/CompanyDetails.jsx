import React, { useState } from "react";

// Routing
import { Link } from "react-router-dom";

// MUI
import { Box, IconButton, Typography, Switch } from "@mui/material";

// Sidebar
import SideBar from "../global/Sidebar";

// Images
import ProfileImage from "../../assets/images/Profile.png";
import LogoutSVG from "../../assets/svgs/Logout.svg";
import Mcdonald from "../../assets/svgs/mc.svg";
import EditSVG from "../../assets/svgs/edit.svg";

const CompanyDetails = () => {
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
              <li className="w-[230px] h-[60px] bg-textColor text-white rounded-[10px] text-center flex items-center justify-center">
                <Link to="#" className="text-xl">
                  Company Information
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to="#" className="text-xl">
                  Score
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
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
        <Box
          width="100%"
          px={2}
          display="flex"
          flexDirection="column"
          gap={3}
          mb={4}
        >
          {/* Initial infos */}
          <Box width="100%">
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: "22px", fontWeight: 700 }}
            >
              Initial infos
            </Typography>

            <Box
              width="100%"
              sx={{ bgcolor: "white" }}
              paddingX={2}
              paddingY={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={6}
              >
                {/* Name */}
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
                    Name
                  </Typography>
                  <Typography>Mcdonald's</Typography>
                </Box>

                {/* Address */}
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
                    Address
                  </Typography>
                  <Typography>Address line 01</Typography>
                </Box>

                {/* Type */}
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
                    Type
                  </Typography>
                  <Typography>Address line 01</Typography>
                </Box>

                {/* Company Number */}
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
                    Company Number
                  </Typography>
                  <Typography>Number</Typography>
                </Box>

                {/* Date Incorporated */}
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
                    Date Incorporated
                  </Typography>
                  <Typography>Address line 01</Typography>
                </Box>
              </Box>

              {/* Edit button */}
              <Box>
                <button>
                  <img src={EditSVG} alt="Edit SVG" />
                </button>
              </Box>
            </Box>
          </Box>

          {/* Contact */}
          <Box width="100%">
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: "22px", fontWeight: 700 }}
            >
              Contact
            </Typography>

            <Box
              width="100%"
              sx={{ bgcolor: "white" }}
              paddingX={2}
              paddingY={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={8}
              >
                {/* Phone */}
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
                    Phone Number
                  </Typography>
                  <Typography>0203 111 1111</Typography>
                </Box>

                {/* Email */}
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
                    Email
                  </Typography>
                  <Typography>test@email.com</Typography>
                </Box>

                {/* Website */}
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
                    Website
                  </Typography>
                  <Typography>mcdonalds@gmail.com</Typography>
                </Box>
              </Box>

              {/* Edit button */}
              <Box>
                <button>
                  <img src={EditSVG} alt="Edit SVG" />
                </button>
              </Box>
            </Box>
          </Box>

          {/* Reviews */}
          <Box width="100%">
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: "22px", fontWeight: 700 }}
            >
              Reviews
            </Typography>

            <Box
              width="100%"
              sx={{ bgcolor: "white" }}
              paddingX={2}
              paddingY={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={8}
              >
                {/* Google */}
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
                    Google
                  </Typography>
                  <Typography>2300 reviews (4.5)</Typography>
                </Box>

                {/* Trust Pilot */}
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
                    Trust Pilot
                  </Typography>
                  <Typography>1500 reviews (4.3)</Typography>
                </Box>

                {/* Facebook */}
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
                    Facebook
                  </Typography>
                  <Typography>30 reviews (5)</Typography>
                </Box>
              </Box>

              {/* Edit button */}
              <Box>
                <button>
                  <img src={EditSVG} alt="Edit SVG" />
                </button>
              </Box>
            </Box>
          </Box>

          {/* Social Media */}
          <Box width="100%">
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: "22px", fontWeight: 700 }}
            >
              Social media
            </Typography>

            <Box
              width="100%"
              sx={{ bgcolor: "white" }}
              paddingX={2}
              paddingY={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={8}
              >
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
                    Instagram
                  </Typography>
                  <Typography>@mcdonalds</Typography>
                </Box>

                {/* Facebook */}
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
                    Facebook
                  </Typography>
                  <Typography>@mcdonalds</Typography>
                </Box>
              </Box>

              {/* Edit button */}
              <Box>
                <button>
                  <img src={EditSVG} alt="Edit SVG" />
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CompanyDetails;
