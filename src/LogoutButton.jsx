import React from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutButton({ onLogout }) {

  // ================= ADDED LOGOUT FUNCTION =================
  function handleLogout() {

    // Call backend logout route
    fetch("/logout", {
      method: "GET",
      credentials: "include" // IMPORTANT: send session cookie
    })
    .then(() => {

      // Redirect user to login page after logout
      window.location.href = "/login";

    })
    .catch(err => console.error(err));
  }
  // =========================================================

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<LogoutIcon />}
      onClick={handleLogout}   
    >
      Logout
    </Button>
  );
}
