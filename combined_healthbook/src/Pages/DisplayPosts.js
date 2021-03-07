import React from "react";
import axios from "axios";

// Use this to grab data from database
import {useEffect, useState} from "react";
import "./Dashboard.css"


function Posts() {

    // usestate for reading data
    const [posts, setPosts] = useState([])

 
    // get data from the database
    axios.get("http://localhost:4000/app/poststore")
         .then((response) => {
            const data = response.data;
            setPosts(data);  // store data w/ useState
            console.log("Get data sucess")
            
           })
         .catch(() => {
            console.log("can't access data")
         })
    

    return(
        // Display posts
        DisplayAarryPost(posts)
        
    );
}

function DisplayAarryPost(posts) {

    return posts.map((post, index) => (
        
            <div key={index}>
                <h3 className="textTitle">{post.title}</h3>
                <p>{post.content}</p>
                <br/><br/>
            </div>

    ));
}


export default Posts;