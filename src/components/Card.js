import './card.css'
import './form.css'
import React, {useState } from 'react';





 const Card =(props) =>{
    
    const [flipped, set] = useState(false)
   
    return(
       <div className={"card-wrapper " + (flipped? 'flip':'')} >
           
           <div className="border-style grid-system full-card"onClick={()=> set(state =>!state)}  >
          
       <div className="img-container">
       <img className="full-card-img" src={props.image} alt="Card cap"></img></div>
       <div className=" char border-corners">
           <div>
           <div className="card-text">
       <h4 className="card-title">{props.name}</h4>
       <h5 className="card-title">Class: {props.class}</h5>
       <h5 className="card-title">Culture: {props.culture}</h5></div>
       </div></div>
      
       <div className="desc">
   <p className="card-title">{props.desc}</p>
       </div>
       <div className="skills"></div>
       </div>
       
         
        
        <div className=" card border-style card-style " onClick={()=> set(state =>!state)}  >
        <img className="card-img-top" src={props.image} alt="Card cap"></img>
        <div className="card-body border-corners">
    <h4 className="card-title">{'Name: ' + props.name}</h4>
    <h5 className="card-title">{'Class: ' + props.class}</h5>
   
        </div>
        </div>
        
        </div>
      
  )
}



export default Card