import { ProductItemProps } from "@/constants/types";
import { AddIcCallOutlined, RemoveCircleOutline } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    objectFit: "contain",
  },
}));

interface CartProps extends ProductItemProps {
  handleRemoveFromCart: (item: number) => void;
  handleUpdateQuantity: (id: number, quantity: number) => void;
}
const CartItem = ({
  thumbnail,
  title,
  price,
  quantity = 0,
  id,
  handleRemoveFromCart,
  handleUpdateQuantity,
}: CartProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={thumbnail}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Quantity
            </Typography>

            <Typography variant="h6" component="div" color="secondary">
              <Badge color="secondary" badgeContent={quantity}></Badge>
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <ButtonGroup>
              <Button
                onClick={() => {
                  handleUpdateQuantity(id, quantity - 1);
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  handleUpdateQuantity(id, quantity + 1);
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
            <IconButton onClick={() => handleRemoveFromCart(id)}>
              <DeleteIcon fontSize="small" sx={{ color: "red" }} />
            </IconButton>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>

            <Typography variant="h6" component="div" color="secondary">
              ${price}
            </Typography>
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItem;
