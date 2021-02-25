import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import users from '../users.json'
import '../Register.css'


function Register(props){
    const [state, setState]=useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

    const createUser=(e)=>{
        e.preventDefault();
        const username=state.username;
        const password=state.password;
        users.push({username,password})
        props.history.push('/')
        return users;
    }

    return(  
        <div>      
            <form className="Register-Form"  onSubmit={createUser}>
                <label className="Register-Label" htmlFor="username">username</label>
                <input className="Register-Input"
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
                <label className="Register-Label" htmlFor="password">Password</label>
                <input className="Register-Input"
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
                <input 
                    className="Register-Submit" 
                    type="submit" 
                    value="Sign Up!"
                />
            </form>
        </div>
    )
}

export default withRouter(Register);