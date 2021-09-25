import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = props => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <React.Fragment>
      <ProgressBar percent={stepPercentage}
                   filledBackground="linear-gradient(to right, rgba(211, 211, 211, 0.8), rgb(12, 224, 196))"
                   height="5px"
      >
      <Step unfilledBackground="transparent">
        {({ accomplished, index }) => (
          <div
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index +1}
            <br/>
          </div>
          
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index +1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index +1}
          </div>
        )}
      </Step>
    </ProgressBar>
    <div id="paymentorder__heading">
      <h1 id="paymenttext1__heading" >Order</h1>
      <h1 id="paymenttext2__heading">payment Method</h1>
      <h1 id="paymenttext3__heading">Confirmation</h1>
    </div>
    
    </React.Fragment>
  );
};

export default MultiStepProgressBar;
