"use client";

import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import VideoWatchStep from "./VideoWatchStep/VideoWatchStep"; // Assuming VideoWatchStep is exported from this file

function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepLabels = [
    "Video Watch Step 1",
    "Video Watch Step 2",
    "Video Watch Step 3",
    "Video Watch Step 4",
    "Finish",
  ];
  const stepContents = [
    <VideoWatchStep src="/teszt.mp4" />,
    <div>Ide jöhet az ösztönző szöveg</div>,
    <VideoWatchStep src="/teszt.mp4" />,
    <VideoWatchStep src="/teszt2.mp4" />,
    <VideoWatchStep src="/teszt2.mp4" />,
    <div>
      Ide jöhet <a href="/">link</a> kép ami csak kell
    </div>,
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Stepper activeStep={activeStep}>
        {stepLabels.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {stepContents[activeStep]}
      <Box sx={{ mt: 2 }}>
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      </Box>
    </Box>
  );
}

export default HorizontalLinearStepper;
