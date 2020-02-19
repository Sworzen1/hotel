import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  nav: {
    zIndex: 3,
    position: "fixed",
    width: "100%",
    height: "100px",
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


});

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
     
      <div className={classes.brand}>
        <span>Resort</span>
      </div>
     
    </div>
  );
};
export default Nav;