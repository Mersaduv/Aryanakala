"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

interface ColorContextProviderProps {
  children: React.ReactNode;
}

export const ColorContextProvider = ({
  children,
}: ColorContextProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );

  const theme = createTheme({
    typography: {
      fontFamily: "hamishe",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          fontFamily: "hamishe",
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 600,
        lg: 900,
        xl: 1024,
      },
    },
    palette: {
      mode: mode,

      primary: {
        main: mode === "light" ? "#fafafa" : "#ffffff",
      },

      secondary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
