"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useIsWindowScrolled } from "@/hooks/useIsWindowScrolled";
import { useRouter } from "next/navigation";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "@/hooks/useRedux";
import Image from "next/image";
import Logo from "../../../app/favicon.png";
import { navLink } from "../helpers/navLinkPath";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { BsSearch, BsMinecartLoaded } from "react-icons/bs";
import UserMenu from "./UserManu";

const Navbar = () => {
  const [user, setUser] = useState(true);

  const router = useRouter();

  // const { products } = useAppSelector((state) => state.wishlist);
  const { totalItems } = useAppSelector((state) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          variant="dense"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              width={70}
              height={50}
              style={{ borderRadius: "5px" }}
              alt="logo"
              src={Logo}
            />
          </Box>
          <Box
            component="div"
            style={{
              display: "flex",
              gap: 25,
              fontWeight: "bold",
            }}
          >
            {navLink.map((item, index) => (
              <Link key={index} href={item.href} style={{ padding: 2 }}>
                {item.name}
              </Link>
            ))}
          </Box>
          <Box
            component="div"
            gap={1}
            display="flex"
            style={{ borderBottom: "1px solid grey" }}
            alignItems="center"
          >
            <SearchBox />
            <BsSearch />
          </Box>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={4}
          >
            {user ? (
              <UserMenu />
            ) : (
              <Box
                component="div"
                className="shadow"
                style={{
                  fontSize: 11,
                  borderRadius: 5,
                  cursor: "pointer",
                }}
                paddingY="4px"
                paddingX="10px"
              >
                ورود / ثبت نام
              </Box>
            )}

            <Box
              component="div"
              style={{
                width: "1.5px",
                height: "30px",
                backgroundColor: "grey",
              }}
            ></Box>
            <Link
              href="/checkout/cart"
              style={{
                paddingBottom: 2,
                paddingTop: 12,
                position: "relative",
              }}
            >
              {" "}
              <BsMinecartLoaded />
              <Box
                component="div"
                style={{
                  position: "absolute",
                  backgroundColor: "#42a5f5",
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  top: "1px",
                  left: "-10px",
                  paddingTop: "3px",
                }}
              >
                {totalItems ?? 0}
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
