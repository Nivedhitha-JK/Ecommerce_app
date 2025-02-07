// components/CustomStepIndicator.js
import React from "react";
import StepIndicator from "react-native-step-indicator";
const defaultStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#0A3981",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#0A3981",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#0A3981",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#0A3981",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#0A3981",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#0A3981",
};
const CustomStepIndicator = ({ currentPosition, labels, customStyles }) => {
  return (
    <StepIndicator
      customStyles={defaultStyles}
      currentPosition={currentPosition}
      labels={labels}
      stepCount={labels.length}
    />
  );
};

export default CustomStepIndicator;
