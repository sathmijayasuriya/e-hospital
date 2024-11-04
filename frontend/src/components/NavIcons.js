import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import userImage from "../images/user.png";

export default function NavIcons() {
  return (
    <div className="nav-icons">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40, // Same size as the Avatar
          height: 40,
          borderRadius: "50%", // Rounds the container to a circle
          border: "1px solid transparent", // Default border
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "white", // Changes border to white on hover
          },
        }}
      >
        <NotificationsIcon sx={{ fontSize: 20, color: "white" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40, // Same size as the Avatar
          height: 40,
          borderRadius: "50%", // Rounds the container to a circle
          border: "1px solid transparent", // Default border
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "white", // Changes border to white on hover
          },
        }}
      >
        <NightsStayIcon sx={{ fontSize: 20, color: "white" }} />
      </Box>

      <Avatar
        className="nav-icon"
        sx={{
          bgcolor: "#830823",
          backgroundImage: `url(${userImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: 40, // Match width and height to the icon containers
          height: 40,
          border: "1px solid transparent", // Default border
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "white", // Changes border to white on hover
          },
        }}
      />
    </div>
  );
}
