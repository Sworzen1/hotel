import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import {Link} from "react-scroll"


const useStyles = makeStyles({
  nav: {
    zIndex: 3,
    position: "fixed",
    width: "100%",
    height: "90px",
    borderBottom: "1px solid white",
    color: "white",
    transition:"0.5s"
  },
  navScrol:{
    zIndex: 3,
    position: "fixed",
    width: "100%",
    height: "90px",
    borderBottom: "1px solid white",
    color: "black",
    backgroundColor:"#dadbd8",
    transition:"0.5s"
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


  let position = useWindowScrollPosition()


  return (
    <div  className={position.y < 100 ? classes.nav :classes.navScrol }>
     
      <div className={classes.brand}>
        <ul className={classes.menu}>
        <Link to="Home" smooth={true} duration={500} >
          <li className={classes.li}>
            Home
          </li>
          </Link>
          <Link to="Rooms" smooth={true} duration={500} offset={-90} >
          <li className={classes.li}>
            Rooms
          </li>
          </Link>
          <Link to="Info" smooth={true} duration={500} offset={-90}>
          <li className={classes.li}>
            Info
          </li>
          </Link>
          <Link to="Restaurant" smooth={true} duration={500} offset={-90}>
          <li className={classes.li}>
            Restaurant
          </li>
          </Link>
          <Link to="Contact" smooth={true} duration={500} offset={-90}>
          <li className={classes.li}>
            Contact
          </li>
          </Link>
        </ul>
      </div>
     
    </div>
  );
};
export default Nav;