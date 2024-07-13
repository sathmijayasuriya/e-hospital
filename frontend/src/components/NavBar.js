import React from "react";
import NavBarLink from "./NavBarLink";
import "../styles/NavBar.css";
import NavIcons from "./NavIcons";
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation } from "react-router";

export default function NavBar() {

  const location = useLocation();
  const currentPath =  location.pathname;

  return (
    <div className="navbar-container">
      <h3 className="logo"> e - Hospital </h3>
      <div className="navbar">
        <NavBarLink label="Dashboard" to="/" icon = {HomeIcon} isActive={currentPath ==="/"}/>
        <NavBarLink label="Requests" to="/requests" icon = {TableRowsIcon}  isActive={currentPath === "/requests"} />
        <NavBarLink label="Feedbacks" to="/feedbacks" icon = {ChatIcon}  isActive={currentPath === "/feedbacks"}/>
        <NavBarLink label="Reports" to="/reports" icon = {ArticleIcon}  isActive={currentPath === "/reports"}/>
        <NavBarLink label="Patient" to="/patient" icon = {PersonIcon}  isActive={currentPath === "/patient"}/>
        <NavBarLink label="Settings" to="/settings" icon = {SettingsIcon}  isActive={currentPath === "/settings"}/>
      </div>
      <NavIcons />
    </div>
  );
}
