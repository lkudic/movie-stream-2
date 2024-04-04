import React, { useEffect } from "react";
import axios from "axios";
//when componemnt renders
// go to this API URL
// bring the data 
// then ill store it
// display to users

const Movies = () =>{

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => console.log(response.data))
        .catch(error => { console.log(error)})

    },[]);
    
    return (
        <div>
        </div>
    );
}

export default Movies;




