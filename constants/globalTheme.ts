import {
  ThemeOptions,
  TypographyVariantsOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

// interface CustomTypographyOptions extends TypographyVariantsOptions {
//   bigBoldHeading: {
//     fontSize: string;
//   };
//   mediumBoldHeading: {
//     fontSize: string;
//   };
//   smallLightText: {
//     fontSize: string;
//   };
//   smallBoldText: {
//     fontSize: string;
//   };
//   miniBoldText: {
//     fontSize: string;
//   };
//   mediumBoldText: {
//     fontSize: string;
//   };
//   tinyLightText: {
//     fontSize: string;
//   };
// }

interface CustomThemeOptions extends ThemeOptions {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    customGray: {
      main: string;
    };
    white: {
      main: string;
    };
    black: {
      main: string;
    };
  };
  typography: {};
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#23856D",
    },
    secondary: {
      main: "#23A6F0",
    },
    customGray: {
      main: "#737373",
    },
    white: {
      main: "#fff",
    },
    black: {
      main: "#000",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#252B42",
      textDecoration: "none",
    },
    h3: {
      fontSize: "1rem",
    },
    h4: {
      fontSize: "0.8rem",
      fontWeight: "bold",
      fonStyle: "normal",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: "700",
      fonStyle: "normal",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontWeight: "400",
      fonStyle: "normal",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    caption: {
      fontSize: "10px",
      // lineHeight: "1px",
    },
  },
} as CustomThemeOptions);
theme = responsiveFontSizes(theme);

// green;
// blue;
// black;
// white;
