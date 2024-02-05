"use client";
import Navbar from "@/components/navbar/Navbar";
import store from "@/redux/store";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "@/components/Footer";
import AlertProvider from "./AlertContext";
import { theme } from "@/constants/globalTheme";

const MainProvider = ({ children }: any) => {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#23856D",
  //     },
  //     secondary: {
  //       main: "#23A6F0",
  //     },
  //     common: {
  //       white: "#ffffff",
  //     },
  //     text: {
  //       primary: "#252B42",
  //     },
  //   },
  // });

  return (
    <Provider store={store}>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </AlertProvider>
    </Provider>
  );
};

export default MainProvider;
