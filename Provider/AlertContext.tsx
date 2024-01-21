import { Alert, Snackbar } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

const AlertContext = createContext({});
interface AlertContextProps {
  handleAlertOpen: (msg: string) => void;
}
interface AlertProviderProps {
  children: ReactNode;
}
const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleAlertOpen = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const dataToSend = { handleAlertOpen };
  return (
    <AlertContext.Provider value={dataToSend}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertProvider;

export const useAlertContext = () => {
  return useContext(AlertContext) as AlertContextProps;
};
