import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/NavBar.css";

// Function to convert string to Sentence Case
const toSentenceCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export default function NabBarLink(props) {
  const { label, to , icon :IconComponent,color,bgcolor,hoverBgcolor,hovercolor,isActive , iconHovercolor} = props;
  return (
    <div className="navbardiv">
      <Button className="navbar-button" 
              component={Link} 
              to={to}
              // sx = {{color : color||"white",
              //        backgroundColor:bgcolor||"#830823",
              //        '&:hover': {
              //         backgroundColor : hoverBgcolor || "white",
              //         color :  hovercolor || "#830823"
              //        },
              sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      color: isActive ? '#830823' : color || "white",
                      backgroundColor: isActive ? 'white' : bgcolor || "#830823",
                      '&:hover': {
                        backgroundColor: hoverBgcolor || "white",
                        color: hovercolor || "#830823",
                        '.icon-hover' :{
                          color : iconHovercolor || "#830823"
                        }
                      },    
                  }}
              >
        {IconComponent && (
          <IconComponent className = 'icon-hover'
            sx={{
                // color: "white",
                color: isActive ? '#830823' : color || "white", 
                fontSize: "15px", 
                paddingRight: "10px" ,
              }}
          />
        )}
      {toSentenceCase(label)}
      </Button>
    </div>
  );
}
