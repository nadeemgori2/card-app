import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SideNav from "../components/SideNav";
import styles from "../styles/Home.module.css";
import { useSearch } from "../context/SearchContext";

const Layout: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.title}>
            Bamboo Cards
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            label="Search Cards"
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchField}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.87)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            }}
          />
        </Toolbar>
      </AppBar>

      <div className={styles.mainContent}>
        <SideNav />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
