import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {

    let [email,setemail]=useState();
    let [password,setpassword]=useState();
    let navigate=useNavigate()
    function login(e){
        e.preventDefault();
        axios.post(`http://localhost:8888/user/verify?email=${email}&password=${password}`)
        .then(res=>{
            console.log(res)
            alert("user verified")
            navigate("/")
        })
        .catch(err=>{
            alert("invalid email or password")
            }
        )
    }
    return (  
        <div className="userlogin">
            <div>
                <div className="col-md-6 m-auto">
                  <form >
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setemail(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setpassword(e)}/>
                    </div>
                    <div className="buttons">
                    <button type="submit" className="btn btn-primary float-left">
                      SignUp
                    </button>
                    <button type="submit" className="btn btn-primary float-right" onClick={login}>
                      SignIn
                    </button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    );
}

export default UserLogin