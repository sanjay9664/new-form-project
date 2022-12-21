

// import React, { Component } from 'react'

// export default class Ref extends Component {

//     constructor(){
//         super()
//         this.userRef = React.createRef()
//     }

//     refFunction(){
//         // console.log(this.userRef)
//         // this.userRef.current.focus()
//         this.userRef.current.value="sanjay gupta"
//     }
//   render() {
//     return (
//       <div>
//         <h1 style={{color:"white"}}>Use the ref overher</h1>
//         <input ref={this.userRef} type="text" name ="user" />
//         <button onClick={()=>{this.refFunction()}}>Click me</button>
//       </div>
//     )
//   }
// }



import React ,{Component} from "react";


export default  class Ref  extends Component{

    constructor(){
        super()
        this.userRef = React.createRef()
    }
      
    editvaldata(){

        // console.log(this.userRef)  //input 
        
        // this.userRef.current.focus() // button press karne ke baad cursor automation input box me blink karega

        this.userRef.current.value="sanjay gupta"
    }

    render() {
      return (
        <div>
          <h1>what is ref </h1>
          <input ref={this.userRef} type="text" name="user" />
          <button onClick={()=>{this.editvaldata()}}>Click me</button>
        </div>
      )
    }
}