import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    container: {
        height:"70vh",
        width:"100%",
        backgroundColor:"#29293d",
        marginTop:100,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    form:{
        marginTop:-30,
        height:"450px",
        width:"600px",
        borderRadius:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    },
    formfield: {
        marginBottom: "15px"
      },
      label: {
        display: "block",
        textTransform: "uppercase",
        fontSize: ".9em",
        color: "white",
        
      },
      input: {
        border: "none",
        color: "white",
        outline: "none",
        borderBottom: "1px solid gold",
        borderRight:"1px solid gold",
        fontSize: "1em",
        fontWeight: "300",
        paddingBottom: "10px",
        marginTop: "10px",
        
    backgroundColor: "transparent",

    '&:-webkit-autofill':{
      transition:"background-color 5000s ease-in-out 0s",
      WebkitTextFillColor:"white",
      WebkitBoxShadow:"0 0 0px 1000px transparent inset"

    }
},
    title:{
        color:"gold",
        fontWeight:400,
        padding:"15px",
        borderBottom:"1px solid gold",
        width:"200px"
    },
    button:{ 
    width:"110px",
    height:"45px",
    backgroundColor:"gold",
    color:"black",
    border:"0px solid black",
    cursor:"pointer",
    fontWeight:800,

    "&:hover":{
        backgroundColor:"gray",
        color:"white",
        border:"1px solid black"
    }

},
})

const Contact = () => {
    const classes = useStyles()


    return(
        <div className={classes.container} id="Contact"> 
        <form className={classes.form} >
        <h1 className={classes.title}>Contact</h1>
        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="name">
            FullName
          </label>
          <input
            type="name"
            id="name"
            className={classes.input}
            placeholder="Enter your name"
            name="name"
            required
          ></input>
        </div>

        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="email">
            E-Mail Adress
          </label>
          <input
            type="email"
            id="email"
            className={classes.input}
            placeholder="Enter your e-mail"
            name="email"
            required
          ></input>
        </div>

        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="password">
            Message
          </label>
          <textarea
          rows="3"
            cols="40"
            type="textarea"
            id="textarea"   
            className={classes.input}
            placeholder="Enter your Message"
            name="textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className={classes.button}>Submit</button>
    </form>
        </div>
    )
}

export default Contact