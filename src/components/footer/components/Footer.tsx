import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Fab, Grid, Typography, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useCallback } from "react";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  const trigger = useScrollTrigger({
    threshold: 300,
    disableHysteresis: true,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down("md"));

  return (
    <footer>
      <Box bgcolor={"#232F3E"}>
        <Container maxWidth={"xl"} sx={{ pb: 10 }}>
          <Grid container>
            {" "}
            <Zoom in={trigger}>
              <Box
                role="presentation"
                sx={{
                  position: "fixed",
                  bottom: isMobile ? 70 : 32,
                  right: isMobile ? 15 : 32,
                  zIndex: 2,
                }}
              >
                <Fab
                  onClick={scrollToTop}
                  color="primary"
                  size="small"
                  aria-label="Scroll back to top"
                >
                  <KeyboardArrowUpIcon fontSize="medium" />
                </Fab>
              </Box>
            </Zoom>
          </Grid>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            columnSpacing={isMobile ? 2 : 20}
            mt={3}
            bgcolor={"#232F3E"}
            color={"#c3c3c3"}
            pt={2}
          >
            <Grid item>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#fff"} mb={2}>
                  Social Media
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"start"}
                >
                  <MediaLinks
                    href="https://github.com/mersaduv"
                    name="GitHub"
                    icon={<GitHubIcon sx={{ mr: 1 }} />}
                  />
                  <MediaLinks
                    href="https://www.linkedin.com/in/mersad-karimi/"
                    name="LinkedIn"
                    icon={<LinkedInIcon sx={{ mr: 1 }} />}
                  />
                  <MediaLinks
                    href="https://twitter.com/mersadkarimian"
                    name="Twitter"
                    icon={<TwitterIcon sx={{ mr: 1 }} />}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#fff"} mb={2}>
                  درباره ما
                </Typography>
                <MediaLinks href="/about" name={"بیشتر...."} />
                <Typography>تماس با ما</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"#fff"} mb={2}>
                  پشتیبانی
                </Typography>
                <MediaLinks href="/" name="FAQ" />
                <MediaLinks href="/" name="محفوظ" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
