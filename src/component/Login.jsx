import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from './context/LoginContext';


export default function Login() {
    const handelsubmit=(event)=>{
        event.preventDefault();
    }
     const context = useContext(LoginContext)
    const history= useHistory()
    const login=()=>{
       context.changeLogin(true)
       history.push("/")
        
    }
    return (
        <div className="w-50 container mt-5">
            <h1 className="text-center text-info">LOGIN</h1>
            <form onSubmit={handelsubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-secondary">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-secondary">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="text-secondary" htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control  " id="exampleInputPassword1"/>
                </div>
                               <button type="submit" className="btn btn-success d-block m-auto" onClick={login}>Submit</button>
            </form>
        </div>
    )
}
