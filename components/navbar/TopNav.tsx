import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const TopNav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: { xs: "none", md: "block" },
      }}
      elevation={0}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableGutters
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0,
              }}
            >
              <LocalPhoneIcon />
              <Typography variant="subtitle1" noWrap>
                (225) 555-0118
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MailOutlineIcon />
              <Typography variant="subtitle1" noWrap>
                michelle.rivera@example.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography variant="subtitle1" noWrap>
              Follow Us and get a chance to win 80% off
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" noWrap>
              Follow Us :
            </Typography>
            <InstagramIcon />
            <YouTubeIcon />
            <FacebookIcon />
            <TwitterIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
