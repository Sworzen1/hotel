import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import restaurant from "./images/restaurant.jpg"

const useStyles = makeStyles({
    container:{
        height:"70vh",
        width:"100%",
        backgroundColor:"green",
        marginTop:"100px"
    },
    right:{
        position:"relative",
        float:"right",
        height:"100%",
        width:"50%",
        backgroundImage:`url(${restaurant})`,
        backgroundSize:"cover"
    },
    left:{
        position:"relative",
        float:"left",
        height:"100%",
        width:"50%",
        backgroundColor:"#29293d",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    leftTitle:{
        color:"gold",
        fontWeight:400,
        padding:"10px",
        borderBottom:"1px solid gold"
    },
    text:{
        color:"white",
        width:"70%",
        textAlign:"left"
    }
})

const Restaurant = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} id="Restaurant">
             <div className={classes.right}></div>
            <div className={classes.left}>
                <div className={classes.text}>
                <h1 className={classes.leftTitle}>Hotel restaurant</h1>
<p><i class="fas fa-check"></i>The best quality of food and service.</p>
<p><i class="fas fa-check"></i>There is a full range of bar drinks including a wide selection of spirits.</p>
<p><i class="fas fa-check"></i>There You can eat delicious breakfast or invite Your partner on romantic dinner.</p>
                </div>
            </div>
        </div>
    )
}
export default Restaurant