
import React from "react";

import ReactDom  from "react-dom";

function Portal (){
  return(
    ReactDom.createPortal(<h1  style={{color:"white"}}>This is portal root and this is create index.html 
    anothe root name is "portal-root"
    Eska use ham ek new portal banane ke liye karte hai index.html
      </h1>, document.getElementById("portal-root"))
  )
}

export default Portal