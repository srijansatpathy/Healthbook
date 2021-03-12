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


class Posts extends React.Component {

    // usestate for reading data
    constructor(props){
        super()

        this.state = {
            dataArray: [],
            postsArray: []
        }

    }
    


    componentDidMount() {

        // get data from the database
        axios.get("http://localhost:4000/app/poststore")
            .then((response) => {
                const data = response.data;

                // Transfer the data
                this.setState({dataArray: data,
                    postsArray: DisplayAarryPost(data)
                });  
            
            })
            .catch(() => {
                console.log("can't access data")
            })
    }
    

    render () {

        return(
            // Display posts
            <div className="allPosts">
                {this.state.postsArray}
            </div>
            
        );
    }
    
}

// create an array of <div> elements in the array
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
