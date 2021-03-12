import React, {useState} from "react"
import Axios from "axios";
import NavigationTab from "../Navigation/NavigTab.js";
import "./Dashboard.css";
import {checkadmin} from '../Pages/SigninPage';
import * as FlatcolorIcons from "react-icons/fc";

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
        var is_empty_input = false;

        // Reset the texts once hitting click
        if(document.getElementById("inputTitle").value)
            document.getElementById("inputTitle").value ="";
        else
            is_empty_input = true;
        
        if(document.getElementById("inputContent").value)
            document.getElementById("inputContent").value ="";

        const inputData = {
            title: input.title,
            content: input.content
        }

        // Adding data to the database
        if(!is_empty_input)
            Axios.post("http://localhost:4000/app/addposts", 
                       inputData)
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
                placeholder="Title" size="52"
                id="inputTitle">   
                </input>
            </div>

            <div className="createContent">
                <textarea name="content" className="textContent"
                 autoComplete="off" onChange={handleChange}
                 placeholder="Content" rows="16" cols="35"
                 id="inputContent">
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