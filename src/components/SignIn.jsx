import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {

    const [data,setData] = useState(
        {
            "name":"",
            "email":"",
            "password":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readData = () => [
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                if (response.data.status=="success") {
                    alert("Registration Success")
                } else {
                alert("Registration failed")       
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    ]

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>Register User</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success" onClick={readData}>Sign In</button>
                                    <br /> <a href="http://">Login</a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn