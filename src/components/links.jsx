import React from "react";

let Links=({arr})=>{

   return <div>
       {arr.map((user)=>(
           <p>{user}</p>
       ))}
   </div>

}

export default Links;