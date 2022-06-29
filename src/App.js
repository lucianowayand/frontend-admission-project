import PageSorter from "./components/PageSorter";
import { Paper } from "@mui/material";

export default function App() {
  return (
    <Paper elevation={3} className="login-form">
      <h1>Atena.io - Register</h1>
      <PageSorter/>
    </Paper>
      
  );
}
