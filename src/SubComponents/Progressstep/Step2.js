import React from "react";
// import { FormGroup, Label, Input } from "reactstrap";
import PaymentCard from "../../ReusableComponents/PaymentCard";
const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <React.Fragment>
    <div style={{marginTop:"50px"}}>
    <PaymentCard/>
    </div>
      {/* <p>What should we call you?</p>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your Username"
          value={props.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup> */}
    </React.Fragment>
  );
};

export default Step2;
