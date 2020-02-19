import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import easy from "./images/easy.jpg"
import medium from "./images/medium.jpg"
import hard from "./images/hard.jpg"
import RoomItem from "./RoomItem"

const useStyles = makeStyles({
    container:{
        position:"relative",
        height:"65vh",
        display:"flex",
        justifyContent:"space-around",
    alignItems:"center",
  
    },

    
})

const RoomList = [
    {
        title:"DELUX",
        img:easy,
        price:100,
        // stars:<i class="fas fa-star"></i>
    },
    {
        title:"SUITE",
        img:medium,
        price:150

    },
    {
        title:"SUPERIOR",
        img:hard,
        price:200
    },
]

const Rooms = () => {
    const classes = useStyles()
    return(
        <div className={classes.container} id="Rooms"> 
            {RoomList.map(item=>{
                return(
                    <RoomItem 
                        key={item.title} title={item.title} img={item.img} price={item.price} 
                        // stars={item.stars}
                    />
                )
            })}
        </div>
    )
}

export default Rooms