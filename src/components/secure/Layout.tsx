"use client";

import React, { ReactNode, lazy, useEffect, useState } from "react";
import { Box } from "@mui/material";
const Navbar = lazy(() => import("../navbar/components/Navbar"));
const Footer = lazy(() => import("../footer/components/Footer"));
const Loader = lazy(() => import("../common/loading/Loader"));

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean | null>(null);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Box>
        {/* <Aside /> */}
        <Box>
          <main>
            {/* <Basket /> */}
            {children}
          </main>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
