import React, {useState} from "react"
import Axios from "axios";
import NavigationTab from "../Navigation/NavigTab.js";
import "./Dashboard.css";
import {checkadmin} from '../Pages/SigninPage';


function Writeposts(props) {

    const [input, setValue] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setValue(prevData => {
            return {
                ...prevData,  // get the previous data
                [name]: value  
                // Set the value base on the input name
            }

            
        })
    }

    function handClick(event) {
        event.preventDefault();  // prevent refresh data
        console.log(input); // check the input

        const inputData = {
            title: input.title,
            content: input.content
        }

        // Adding data to the database
        Axios.post("http://localhost:4000/app/addposts", inputData)
    }

    
    return (
        
        <>
        <NavigationTab admin={checkadmin}/>

        <h1 className="createPosts">Creating posts</h1>
        
        <div>
         <form>
            <div className="createTitle">
                <input name="title" className="form-control"
                autoComplete="off" onChange={handleChange}
                placeholder="Title" size="52"></input>
            </div>

            <div className="createContent">
                <textarea name="content" className="form-control"
                 autoComplete="off" onChange={handleChange}
                 placeholder="Content" rows="16" cols="35">
                </textarea>
            </div>

            <button onClick={handClick}
            className="createButton">
            Post</button>
        </form>       
        </div>
        </>
    );
}

export default Writeposts;