import React, {createContext, useContext} from "react";
import axios from "axios";
import * as FlatcolorIcons from "react-icons/fc";
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

    // revese mapping
    return posts.slice(0).reverse().map((post, index) => (
        
            <div className="posts" key={index}>
                <h1 className="postTitle">
                <FlatcolorIcons.FcDocument/> {"  "}
                {SplitContentArray(post.title,22, 
                "")}</h1>
                {SplitContentArray(post.content,35, 
                "postContent")}
                <span className="postDate">
                {String(post.date).substring(0,10)}
                </span>
                <br/><br/>
            </div>

    ));
}

function SplitContentArray(target, subLength, classStyle) {
    var resultArray = []

    var targetLength = target.length

    // Case #1: nothing needed to be done
    if(subLength >= targetLength)
        return ( <p className={classStyle}>{target}</p>);

    // Case #2: split the content
    else {

        // Stick content into array
        for(let i = 0; i < targetLength; i+=subLength) {

            resultArray.push(target.substring(i,i+subLength))
        }

        return resultArray.map((content, index) => (
            <p className={classStyle} id={index+targetLength} >
            {content}</p>
        ));
    }
    


}


export default Posts;
