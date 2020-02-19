import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    root: {
        maxWidth: 345,
        borderBottom:"1px solid gray",
        height:"300px",
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
      },
      media: {
        height: 140,
      },
      cardTitle: {
          color:"gold",
          fontSize:"20px",
          fontWeight:800
      },
      button:{
        width:"140px",
        height:"40px",
        backgroundColor:"gold",
        color:"black",
        border:"0px solid black",
        cursor:"pointer",
        fontWeight:800,
        "&:hover":{
            backgroundColor:"gray",
            color:"white",
 
        }
 
    },
    left:{
        position:"relative",
        float:"left",
    },
    right:{
        position:"relative",
        float:"right",
    },
    xd:{
        marginTop:10,
        marginBottom:10
    }

    
})

const RoomItem = (props) => {
    const classes = useStyles()
    return(
       <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Delux apartament"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
              {props.title}
            </Typography>
            <div className={classes.description}>
                <div className={classes.left}> Price from 
    <div className={classes.xd}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></div>
                <div className={classes.right}>{props.price}$ / per Night</div>
                
            </div>

          </CardContent>
        </CardActionArea>
        <CardActions>
        <button className={classes.button}>DETAILS</button>
        <button className={classes.button}>RESERVATION</button>
        </CardActions>
      </Card> 
    )
}

export default RoomItem