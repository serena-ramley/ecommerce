import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";
// import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => (
  <CustomButtonContainer
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
    {...props}
  >
    {children}
  </CustomButtonContainer>
);

// const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => (
//   <button
//     className={`${inverted ? "inverted" : ""} ${
//       isGoogleSignIn ? "google-sign-in" : ""
//     } custom-button`}
//     {...props}
//   >
//     {children}
//   </button>
// );

export default CustomButton;
