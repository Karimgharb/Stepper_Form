import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GenericData from "./steps/GenericData";
import "./Stepper.style.css";
import Map from "./steps/Map";

const steps = [
  "Add house informations",
  "Add localization",
  "Upload pictures",
  "Validation",
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
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
    <div className="stepper">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>post display goes here</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} color="warning">
              Reset
            </Button>
            <Button variant="contained" color="success" onClick={handleReset}>
              Validate
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <div className="steppr__step__container">
          {/* Form view goes here */}

          {activeStep === 0 ? <GenericData /> : null}
          {activeStep === 1 ? <Map /> : null}
          {activeStep === 2 ? <p>third step</p> : null}
          {activeStep === 3 ? <p>forth step</p> : null}

          {/* Form view ends here */}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
