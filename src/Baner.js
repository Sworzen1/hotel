import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Image from "./images/baner.jpg"
import {Link} from "react-scroll"

const useStyles = makeStyles ({
    container:{
        backgroundImage:`url(${Image})`,
        height:"65vh",
        width:"100%",
        backgroundSize:"cover"

    },
    welcome:{
        height:"65vh",
        width:"100%",
        position:"relative",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        top:20
    },
    textup:{
        color:"white",
        fontSize:"30px",
        fontWeight:300
    },
    textdown:{
        color:"gold",
        fontSize:"50px",
        fontWeight:800,
        letterSpacing:"10px"

    },
    button:{
        width:"150px",
        height:"50px",
        backgroundColor:"gold",
        color:"black",
        border:"0px solid black",
        cursor:"pointer",
        fontWeight:800,

        "&:hover":{
            backgroundColor:"white",
            color:"gold",
            border:"1px solid black"
        }
 
    },

})

const Baner = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} id="Home">
            <div className={classes.welcome}>
                <p className={classes.textup}>welcome to
                    <p className={classes.textdown}>PLATINIUM HOTEL</p>
                    </p>
                    
                   <Link  to="Info" smooth={true} duration={500}>
                    <button className={classes.button}>MORE INFO</button>
                    </Link>
                    
            </div>
        </div>
    )
}

export default Baner