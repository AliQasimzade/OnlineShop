import React, { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarItem = () => {
  return (
    <Snackbar autoHideDuration={6000}>
      <Alert severity="success" sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default SnackbarItem;
