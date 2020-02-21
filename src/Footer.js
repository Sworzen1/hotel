import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-scroll"

const useStyles = makeStyles({
    container: {
        height:"30vh",
        width:"100%",
        backgroundColor:"black",
        display:"flex"
    },
    adres:{
        color:"gold",
        display:"grid",
        gridTemplateRows:"auto auto auto",
        width:"calc(90%/3)",
        margin:"auto",
    },
    about:{
        color:"gold",
        width:"calc(80%/3)",
        margin:"auto",
    },
    text:{
        textAlign:"left"
    }
    
})

const Footer = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>

            <div className={classes.adres}>
                <h4>Adress: Sea Road 19/20<br/> USA, Maledives</h4>
                <h4>Telephone: 00-000-000-000</h4>
                <h4>Email: Support@email.com</h4>
                </div>

            <div className={classes.about}>
                <div className={classes.text}>
                <h3>About Hotel</h3>
                <p> If you are seeking superior hotels, our Sample Hotel is the perfect location to begin your search.
                     You’ll enjoy the convenience of newly redesigned rooms and suites,
                      and large restaurant.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer