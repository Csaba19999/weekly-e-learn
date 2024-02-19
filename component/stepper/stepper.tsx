"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ISteps = {
  steps: {
    label: string;
    element: React.ReactNode;
  }[];
};

export default function HorizontalLinearStepper(props: ISteps) {
  const { steps } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        className="bg-white"
        style={{
          padding: "24px",
          margin: "8px",
          borderRadius: "16px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        activeStep={activeStep}
      >
        {steps.map((item, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={item.label}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            GRATULÁLUNK! Befejezteted a hetet!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              style={{
                backgroundColor: "white",
                padding: "12px",
                margin: "8px",
                borderRadius: "16px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={handleReset}
            >
              Restart
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <p className="w-full mx-2 text-center font-semibold text-3xl py-6">{steps[activeStep].label}</p>
            <div>{steps[activeStep].element}</div>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={{
                backgroundColor: "white",
                padding: "12px",
                margin: "8px",
                borderRadius: "16px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              style={{
                backgroundColor: "white",
                padding: "12px",
                margin: "8px",
                borderRadius: "16px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
