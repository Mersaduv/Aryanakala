"use client";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      > */}
      <CircularProgress color="inherit" />
      {/* </Backdrop>{" "} */}
    </div>
  );
};

export default Spinner;
