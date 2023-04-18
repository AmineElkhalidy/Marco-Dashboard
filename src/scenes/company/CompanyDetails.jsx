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

// Data
import { companiesList } from "../../data/data";

const CompanyDetails = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(true);
  const [initialUpdate, setInitialUpdate] = useState(false);
  const [contactUpdate, setContactUpdate] = useState(false);
  const [mediaUpdate, setMediaUpdate] = useState(false);
  const [reviewsUpdate, setReviewsUpdate] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Filtering the company
  const selectedCompany = companiesList.filter((company) => company.id === id);
  const { companyName } = selectedCompany;
  return (
    <div className="w-full flex relative ">
      <SideBar companyName={companyName} />

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
                <Link to="/company-details" className="text-xl">
                  Company Information
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to="/company-details/score" className="text-xl">
                  Score
                </Link>
              </li>

              <li className="w-[230px] h-[60px] text-textColor rounded-[10px] text-center flex items-center justify-center">
                <Link to="/company-details/unique" className="text-xl">
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

            {!initialUpdate ? (
              <Box width="100%">
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
                    <button onClick={() => setInitialUpdate(true)}>
                      <img src={EditSVG} alt="Edit SVG" />
                    </button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box width="100%" bgcolor="white" py={3} px={4}>
                <Box component="form" width="100%">
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={3}
                  >
                    <label htmlFor="file">
                      <img src={UploadImage} alt="Uploading..." />
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      style={{ visibility: "none", display: "none" }}
                    />
                  </Box>

                  <div className="grid grid-cols-2 gap-4">
                    <Box width="100%">
                      <TextField fullWidth label="Company Name" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Company ID" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth type="date" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Address" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Location" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="City" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Type" />
                    </Box>

                    {/* Color Picker */}
                    <Box width="100%">
                      <Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: 500, fontSize: "18px" }}
                          >
                            Color
                          </Typography>

                          <button className="text-[#788B9A] font-medium hover:text-textColor">
                            + Add
                          </button>
                        </Box>
                      </Box>
                      {/* First Row of Colors */}
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        my={2}
                      >
                        {[
                          "#EF4444",
                          "#F97316",
                          "#FACC15",
                          "#4ADE80",
                          "#2DD4BF",
                          "#3B82F6",
                          "#6467F2",
                        ].map((color, index) => (
                          <div
                            key={index}
                            className="w-[24px] h-[24px] rounded-full"
                            style={{ background: color }}
                          />
                        ))}
                      </Box>
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
                    onClick={() => setInitialUpdate(false)}
                    className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
                  >
                    Update
                  </button>
                </Box>
              </Box>
            )}
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

            {!contactUpdate ? (
              <Box width="100%">
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
                    <button onClick={() => setContactUpdate(true)}>
                      <img src={EditSVG} alt="Edit SVG" />
                    </button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box width="100%" bgcolor="white" py={3} px={4}>
                <Box component="form" width="100%">
                  <div className="grid grid-cols-2 gap-4">
                    <Box width="100%">
                      <TextField fullWidth label="Phone Number" type="tel" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Email" type="email" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Website" />
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
                    onClick={() => setContactUpdate(false)}
                    className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
                  >
                    Update
                  </button>
                </Box>
              </Box>
            )}
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

            {!reviewsUpdate ? (
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
                  <button onClick={() => setReviewsUpdate(true)}>
                    <img src={EditSVG} alt="Edit SVG" />
                  </button>
                </Box>
              </Box>
            ) : (
              <Box width="100%" bgcolor="white" py={3} px={4}>
                <Box component="form" width="100%">
                  <Box width="100%" mb={4}>
                    <Box my={2} width="100%">
                      <TextField fullWidth label="Review 1" />
                    </Box>
                    <div className="grid grid-cols-2 gap-4">
                      <Box width="100%">
                        <TextField fullWidth label="Total Reviews" />
                      </Box>
                      <Box width="100%">
                        <TextField fullWidth label="Score" />
                      </Box>
                    </div>
                  </Box>

                  <Box width="100%">
                    <Box my={2} width="100%">
                      <TextField fullWidth label="Review 2" />
                    </Box>
                    <div className="grid grid-cols-2 gap-4">
                      <Box width="100%">
                        <TextField fullWidth label="Total Reviews" />
                      </Box>
                      <Box width="100%">
                        <TextField fullWidth label="Score" />
                      </Box>
                    </div>
                  </Box>

                  <Box width="100%" textAlign="right" mt={2}>
                    <button className="text-[#788B9A] text-right">
                      + Add another review
                    </button>
                  </Box>
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
                    onClick={() => setReviewsUpdate(false)}
                    className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
                  >
                    Update
                  </button>
                </Box>
              </Box>
            )}
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

            {!mediaUpdate ? (
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
                  <button onClick={() => setMediaUpdate(true)}>
                    <img src={EditSVG} alt="Edit SVG" />
                  </button>
                </Box>
              </Box>
            ) : (
              <Box width="100%" bgcolor="white" py={3} px={4}>
                <Box component="form" width="100%">
                  <div className="grid grid-cols-2 gap-4">
                    <Box width="100%">
                      <TextField fullWidth label="Social Media 1" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Link" />
                    </Box>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
                    <Box width="100%">
                      <TextField fullWidth label="Social Media 2" />
                    </Box>
                    <Box width="100%">
                      <TextField fullWidth label="Link" />
                    </Box>
                  </div>

                  <Box width="100%" textAlign="right">
                    <button className="text-[#788B9A] text-right">
                      + Add another social media
                    </button>
                  </Box>
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
                    onClick={() => setMediaUpdate(false)}
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

export default CompanyDetails;
