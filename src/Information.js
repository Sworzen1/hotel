import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import reception from "./images/reception.jpg"

const useStyles = makeStyles({
    container:{
        height:"70vh",
        width:"100%",
        backgroundColor:"red"
    },
    left:{
        position:"relative",
        float:"left",
        height:"100%",
        width:"50%",
        backgroundImage:`url(${reception})`,
        backgroundSize:"cover"
    },
    right:{
        position:"relative",
        float:"right",
        height:"100%",
        width:"50%",
        backgroundColor:"#29293d",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    rightTitle:{
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

const Information = () => {
    const classes = useStyles()
    return(
        <div className={classes.container} id="Info">
            <div className={classes.left}></div>
            <div className={classes.right}>
                <div className={classes.text}>
                <h1 className={classes.rightTitle}>Why Platinium hotel</h1>
<p><i class="fas fa-check"></i> Connect with channels like Booking.com, Tripadvisor etc.</p>
<p><i class="fas fa-check"></i> The hotel provides English speaking staff for foreign guests.</p>
<p><i class="fas fa-check"></i> Our hotel provides a high quality service for all guests. Well qualified staff, daily housekeeping</p>
<p><i class="fas fa-check"></i> All our rooms are style, elegant and modern facilities and provide you everything for a comfortable stay.</p>
<p><i class="fas fa-check"></i> The attractions within walking distance.</p>
<p><i class="fas fa-check"></i> In the close proximity from our hotel you can enjoy breakfast or romantic dinner.</p>
<p><i class="fas fa-check"></i> Rooms with views that are perfect for enjoyment</p>
                </div>
            </div>
            </div>
    )
}

export default Information