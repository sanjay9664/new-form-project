
import React  from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
const AddUser = props =>{

    const AdduserHandler = (event)=>{
        event.preventDefault()
        let form = document.getElementById("form")
        let username = form.username.value 
        let age = form.age.value 
        console.log(username , age)

    }

    return(
        <Card className={classes.input}>
        <form  id="form" onSubmit={AdduserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Enter your name" />
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type="text" placeholder="Enter your name" />
            <button type="submit">Add User</button>
        </form>
        </Card>
    )
}

export default AddUser;