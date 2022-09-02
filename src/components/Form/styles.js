import { makeStyles } from "@mui/styles";
import {createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 4,
});
  
export default makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: theme.spacing(3),
    margin: 10
  },
}));
