import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Restaurant = () => {
const[item, setItem] = useState([])    
useEffect(() =>{
    async function fetch(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setItem(res.data)
    } 
    fetch();

}, []);

    return(
       <>
       <section className="main-container"> 
{item.map((curElem) => 
<div className="main-card" key={curElem.id} >
  <Link  to={`${curElem.id}`}>
  <div className="card-body">
    <h5 className="card-title">{curElem.title}</h5>
    <p className="card-text">{curElem.body}</p>
    </div>
    </Link>

</div>


    
  
)}
</section>
</>

    )
}

export default Restaurant;