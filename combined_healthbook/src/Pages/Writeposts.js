import React, {useState} from "react"
import Axios from "axios";

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
        
        
        <div className='container'> 
        <h1>Creating posts</h1><br/><br/>
         <form>
            <div className= 'form-group'>
                <input name="title" className="form-control"
                autoComplete="off" onChange={handleChange}
                placeholder="Title"></input>
            </div>

            <div className = 'form-group'>
                <textarea name="content" className="form-control"
                 autoComplete="off" onChange={handleChange}
                 placeholder="Content">
                </textarea>
            </div>

            <button onClick={handClick}
            className="btn btn-lg btn-info">
            Add</button>
        </form>
            
        </div>
    
    );
}

export default Writeposts;