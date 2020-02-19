import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  nav: {
    zIndex: 3,
    position: "fixed",
    width: "100%",
    height: "90px",
    borderBottom: "1px solid white",
    color: "white"
  },

  brand: {
    position: "absolute",
    lineHeight: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "4px"
  },
  menu:{
    position:"relative",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width:"40vw",
    listStyle:"none",
    
  },
  li:{
    height:"60px",
    width:"110px",
    cursor:"pointer",
    "&:hover":{
      backgroundColor:"white",
      color:"black"
    }   
  }


});

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
     
      <div className={classes.brand}>
        <ul className={classes.menu}>
          <li className={classes.li}>
            Home
          </li>
          <li className={classes.li}>
            Rooms
          </li>
          <li className={classes.li}>
            Info
          </li>
          <li className={classes.li}>
            Contact
          </li>
        </ul>
      </div>
     
    </div>
  );
};
export default Nav;