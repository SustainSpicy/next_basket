import { Badge, BadgeProps, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 13,
    color: "#23A6F0",
  },
}));
