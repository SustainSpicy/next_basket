import { ProductItemProps } from "@/constants/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ProductItem = ({
  thumbnail,
  discountPercentage,
  title,
  description,
  price,
  id,
}: ProductItemProps) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display={"flex"}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Link href={`/products/${id}`} style={{ maxWidth: 255 }}>
        <Card elevation={0}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={thumbnail}
              alt={title}
              sx={{ minHeight: "200px", maxHeight: "200px" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={16}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                fontSize={12}
              >
                English Department
              </Typography>
              <Box display={"flex"} justifyContent={"center"} gap={2}>
                <Typography variant="body2" color={"#BDBDBD"}>
                  ${price}
                </Typography>{" "}
                <Typography variant="body2" color={"#23856D"}>
                  ${discountPercentage}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductItem;
