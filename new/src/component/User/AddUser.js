
import React, { useState }   from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) =>{

     const[enterusername , setEnterusername] = useState('')
     const [enterAge , setenterAge] = useState("")

      const [error, setError] = useState("")

    const AdduserHandler = (event)=>{
        event.preventDefault(); 
        
        if(enterusername.trim().length===0 ||enterAge.trim().length===0){

            setError({
                title:"Invaild input",
                message: "Please enter vaild name and age (non-Empty value)!"
            })
            return 
            // alert("Enter something !")
        }
        
        if(+enterAge<1){
            setError({
                title:"Invaild age",
                message: "Please enter vaild age (> 0)"
            })
         return 
        //  alert(" Enter more then -1 begger value like 1 !")
        }
        // console.log(enterusername,enterAge)
        props.onAddUser(enterusername,enterAge)

        setEnterusername("")
        setenterAge("")
    }
      
    const enteruserhandler = (event)=>{
    setEnterusername(event.target.value)
    }

    const enterAgehandler  = (event)=>{
   setenterAge(event.target.value)
    }

       const errorhandler = ()=>{
        setError(null)
       }
    
    return(
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
        <form   onSubmit={AdduserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enterusername} onChange={enteruserhandler} placeholder="Enter your name" />
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type="text" value={enterAge} onChange={enterAgehandler}  placeholder="Enter your name" />
            <Button type="submit">Add User</Button>
        </form>
        
        </Card>
        </div>
    )
}

export default AddUser;