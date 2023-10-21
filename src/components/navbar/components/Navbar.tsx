"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useIsWindowScrolled } from "@/hooks/useIsWindowScrolled";
import { useRouter } from "next/navigation";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "@/hooks/useRedux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const ref: any = useOnClickOutside(handleClickOutside);

  const router = useRouter();

  const { products } = useAppSelector((state) => state.wishlist);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
