"use client";

import React, { ReactNode, lazy, useEffect, useState } from "react";
import { Box } from "@mui/material";
const Navbar = lazy(() => import("../navbar/components/Navbar"));
const Footer = lazy(() => import("../footer/components/Footer"));
const Loader = lazy(() => import("../common/loading/Loader"));

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box component="div" style={{ height: "400px" }}>
        <div>{children}</div>
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardLayout;
