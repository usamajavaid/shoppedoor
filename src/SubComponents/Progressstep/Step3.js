import React from "react";
import Sucesspage from "../../ReusableComponents/Sucesspage";
const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <React.Fragment>
      <Sucesspage/>
    </React.Fragment>
  );
};

export default Step3;
