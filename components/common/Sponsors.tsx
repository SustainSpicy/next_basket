import React from "react";
import icon1 from "../../public/icon/icon1.png";
import icon2 from "../../public/icon/icon2.png";
import icon3 from "../../public/icon/icon3.png";
import icon4 from "../../public/icon/icon4.png";
import icon5 from "../../public/icon/icon5.png";
import { Box, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Box sx={{ background: "#FAFAFA", paddingY: "2rem" }}>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          rowGap={{ xs: 6 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={icon1}
              style={{ objectFit: "contain" }}
              alt="sponsor1"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={icon2}
              style={{ objectFit: "contain" }}
              alt="sponsor2"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={icon3}
              style={{ objectFit: "contain" }}
              alt="sponsor3"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={icon4}
              style={{ objectFit: "contain" }}
              alt="sponsor4"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={icon5}
              style={{ objectFit: "contain" }}
              alt="sponsor5"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponsors;
