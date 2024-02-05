import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import background2 from "../../public/img/background2.png";
const ProductDetail = () => {
  return (
    <Stack sx={{ paddingX: "1rem", paddingY: "2rem" }} spacing={2}>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Typography variant="subtitle2" color={"#737373"}>
          Description
        </Typography>
        <Typography variant="subtitle2" color={"#737373"}>
          Additional Information
        </Typography>
        <Typography variant="subtitle2" color={"#737373"}>
          Reviews (0)
        </Typography>
      </Stack>
      <Typography variant="subtitle2">
        <hr />
      </Typography>

      <Grid
        container
        py={8}
        rowGap={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Stack
            spacing={4}
            sx={{
              maxWidth: { md: "500px" },
              alignItems: { sm: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
                letterSpacing: "0.2px",
                color: "#252B42",
              }}
            >
              the quick fox jumps over
            </Typography>

            <Typography variant="subtitle2" color={"#737373"}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              color={"#737373"}
              variant="body2"
              style={{ paddingLeft: "1rem", borderLeft: "2px solid #23856D" }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography variant="body2" color={"#737373"}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Image src={background2} alt="grid image" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductDetail;
