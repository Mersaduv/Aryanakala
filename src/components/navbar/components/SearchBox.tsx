import { Autocomplete } from "@mui/material";
import Link from "next/link";
import React from "react";
import db from "../../../db.json";

export default function SearchBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={db.products}
      getOptionLabel={(option) => option.title}
      style={{ backgroundColor: "#fafafa" }}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            className="search-input"
            placeholder="جستجو............."
            style={{
              width: 200,
              backgroundColor: "#fafafa",
              height: 35,
              borderBottom: "1px gray solid",
              padding: 5,
              border: "none",
              outline: "none",
              // fontFamily: "hamishe",
            }}
            {...params.inputProps}
          />
        </div>
      )}
      renderOption={(props, option) => (
        <Link href="/products">
          <li {...props}>{option.title}</li>
        </Link>
      )}
    />
  );
}
