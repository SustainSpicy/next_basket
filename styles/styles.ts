import {
  Badge,
  BadgeProps,
  Theme,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 13,
    color: "#23A6F0",
  },
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontWeight: 700,
  color: "#252B42",
  textDecoration: "none",
}));
export const StyledSpan1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fonStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.2px",
}));
export const StyledSpan2 = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fonStyle: "normal",
  fontWeight: 400,
  lineHeight: "45px",
  letterSpacing: "0.2px",
  color: "#737373",
}));

export const StyledSpan3 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fonStyle: "normal",
  fontWeight: 400,
  letterSpacing: "0.2px",
  color: "#737373",
}));
export const StyledSpan4 = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fonStyle: "normal",
  fontWeight: 400,

  letterSpacing: "0.2px",
  color: "#737373",
}));
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
