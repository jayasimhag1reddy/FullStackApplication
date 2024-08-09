import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const[user,setUser]=useState({
        name:"",
        userName:"",
        email:""
    })

    const{name,userName,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/User/addUser",user);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded shadow p-2 mt-2'>
                <h2 className='text-center m-1'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                <label htmlFor='User Name' className='form-label'>
                        User Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your User Name'
                    name='userName'
                    value={userName}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label' >
                        E-mail
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your Email address'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='Submit' className='btn btn-outline-primary '>Submit</button>
                <Link type='Submit' className='btn btn-danger mx-2' to="/">Cancel</Link>
               </form> 
            </div>
        </div>
        
    </div>
  )
}
