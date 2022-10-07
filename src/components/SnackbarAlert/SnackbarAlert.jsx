import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const SnackbarAlert = ({ open, openMsg }) => {
 
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={openMsg}
    />
  );
};

export default SnackbarAlert;
