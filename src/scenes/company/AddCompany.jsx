import React, { useState } from "react";

// Lib
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// Routing
import { Link } from "react-router-dom";

// MUI
import {
  Box,
  Typography,
  Drawer,
  Tabs,
  Tab,
  TextField,
  AppBar,
} from "@mui/material";

// Icons
import CloseSVG from "../../assets/svgs/close.svg";
import UploadImage from "../../assets/images/upload.png";
import SuccessSVG from "../../assets/svgs/success.svg";

// Steps
import { Steps, StepsProvider, useSteps } from "react-step-builder";

function InitialInfo({ next, setIsDrawerOpen }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
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

        <Box my={2} width="100%">
          <TextField fullWidth label="Company Name" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Company ID" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth type="date" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Address" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Location" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="City" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Type" />
        </Box>
      </Box>

      {/* Color Picker */}
      <Box width="100%" mt={4}>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: "18px" }}>
              Color
            </Typography>

            <button className="text-textColor font-medium">+ Add</button>
          </Box>
        </Box>
        {/* First Row of Colors */}
        <Box width="100%" display="flex" justifyContent="space-between" my={2}>
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
        {/* Second Row of Colors */}
        <Box width="100%" display="flex" justifyContent="space-between" my={1}>
          {[
            "#EC4899",
            "#F43F5E",
            "#D946EF",
            "#8B5CF6",
            "#0EA5E9",
            "#10B981",
            "#84CC16",
          ].map((color, index) => (
            <div
              key={index}
              className="w-[24px] h-[24px] rounded-full"
              style={{ background: color }}
            />
          ))}
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={next}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

function Contact({ next, prev }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box my={2} width="100%">
          <TextField fullWidth label="Phone Number" type="tel" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Email" type="email" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Website" />
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={prev}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={next}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

function Media({ next, prev }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box my={2} width="100%">
          <TextField fullWidth label="Social Media 1" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Link" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Social Media 2" />
        </Box>
        <Box my={2} width="100%">
          <TextField fullWidth label="Link" />
        </Box>

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
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={prev}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={next}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

function Reviews({ next, prev }) {
  return (
    <Box width="100%">
      <Box component="form" width="100%">
        <Box width="100%" mb={4}>
          <Box my={2} width="100%">
            <TextField fullWidth label="Review 1" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Total Reviews" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Score" />
          </Box>
        </Box>

        <Box width="100%">
          <Box my={2} width="100%">
            <TextField fullWidth label="Review 2" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Total Reviews" />
          </Box>
          <Box my={2} width="100%">
            <TextField fullWidth label="Score" />
          </Box>
        </Box>

        <Box width="100%" textAlign="right">
          <button className="text-[#788B9A] text-right">
            + Add another review
          </button>
        </Box>
      </Box>

      {/* Buttons Container */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="3rem"
      >
        <button
          onClick={prev}
          className="py-4 px-12 border border-textColor text-[18px] font-medium text-textColor rounded-[10px] "
        >
          Back
        </button>
        <button
          onClick={next}
          className="py-4 px-12 text-[18px] font-medium text-white rounded-[10px] bg-textColor"
        >
          Save
        </button>
      </Box>
    </Box>
  );
}

function Success({ setIsDrawerOpen }) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={SuccessSVG} alt="Successfully registered!" />
      <Typography sx={{ fontWeight: 700, fontSize: "22px" }}>
        Your company successfully created.
      </Typography>

      <button
        onClick={() => setIsDrawerOpen(false)}
        className="bg-textColor py-[14px] px-[40px] rounded-[10px] font-medium text-white"
      >
        Go to home
      </button>
    </Box>
  );
}

function StepsBuilder({ setIsDrawerOpen }) {
  const { next, prev } = useSteps();
  return (
    <Steps>
      <InitialInfo next={next} setIsDrawerOpen={setIsDrawerOpen} />
      <Contact next={next} prev={prev} />
      <Media next={next} prev={prev} />
      <Reviews next={next} prev={prev} />
      <Success setIsDrawerOpen={setIsDrawerOpen} />
    </Steps>
  );
}

const AddCompany = ({ open, onClose, setIsDrawerOpen }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="500px" padding="2rem">
        {/* Drawer Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography sx={{ fontSize: "22px", fontWeight: 700 }} variant="h3">
            Add Company
          </Typography>
          <button onClick={() => setIsDrawerOpen(false)}>
            <img src={CloseSVG} alt="Close svg" />
          </button>
        </Box>

        {/* Drawer tabs */}
        <Box
          my="2rem"
          sx={{ width: "100%", background: "#bbb", borderRadius: "10px" }}
        ></Box>

        <Box width="100%">
          <StepsProvider>
            <StepsBuilder setIsDrawerOpen={setIsDrawerOpen} />
          </StepsProvider>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddCompany;
