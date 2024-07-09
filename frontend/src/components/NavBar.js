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

export default function NavBar() {
  return (
    <div className="navbar-container">
      <h3 className="logo"> e - Hospital </h3>
      <div className="navbar">
        <NavBarLink label="Dashboard" to="/" icon = {HomeIcon} />
        <NavBarLink label="Requests" to="/requests" icon = {TableRowsIcon} />
        <NavBarLink label="Feedbacks" to="/" icon = {ChatIcon}/>
        <NavBarLink label="Reports" to="/" icon = {ArticleIcon}/>
        <NavBarLink label="Patient" to="/" icon = {PersonIcon}/>
        <NavBarLink label="Settings" to="/" icon = {SettingsIcon}/>
      </div>
      <NavIcons />
    </div>
  );
}
