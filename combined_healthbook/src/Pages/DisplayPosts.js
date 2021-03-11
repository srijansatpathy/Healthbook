import React, {createContext, useContext} from "react";
import axios from "axios";

// Use this to grab data from database
import {useEffect, useState} from "react";
import "./Dashboard.css";

const PostContexts = createContext();

const CreatePosts = (props) => {

    return(
        <PostContexts value={props.data}>
            {props.children}
        </PostContexts>
    )
}


function Posts() {

    // usestate for reading data
    const [posts, setPosts] = useState([])

 
    // get data from the database
    axios.get("http://localhost:4000/app/poststore")
         .then((response) => {
            const data = response.data;
            setPosts(data);  // store data w/ useState
            
           })
         .catch(() => {
            console.log("can't access data")
         })
    
    // create an array of <div> elements in the array
    var array_contents = DisplayAarryPost(posts);
    
    return(
        // Display posts
        <div className="allPosts">
            {array_contents}
        </div>
        
    );
}

function DisplayAarryPost(posts) {

    

    return posts.map((post, index) => (
        
            <div className="posts" key={index}>
                <h1 className="postTitle">{post.title}</h1>
                <p className="postContent">{post.content}</p>
                <span className="postDate">{post.date}</span>
                <br/><br/>
            </div>

    ));
}


export default Posts;
