import axios from "axios";
import { useState } from "react";
import "../styles/home.css"
const User = () => {
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [phone, setphone] = useState("")
    let [password, setpassword] = useState("")
    function registeruser(e) {
        e.preventDefault()
        let data = { name, email, phone, password }
        console.log(data)
        axios.post(`http://localhost:8888/user`,data)
            .then((resp) => {
                
                alert("User registered successfully")
            })
            .catch((err) => {
                console.log(err);
                alert("invalid credentials")
            })

    }
    return (
        <div className="user">
            <form onSubmit={registeruser}>
                <label htmlFor="">Name</label>
                <input required type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="enter the Name" />
                <label htmlFor="">Email</label>
                <input required value={email} onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="enter email" />
                <label htmlFor="">Phone Number</label>
                <input required value={phone} onChange={(e) => { setphone(e.target.value) }} type="tel" placeholder="enter phone number" />
                <label htmlFor="">Password</label>
                <input required value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="enter password" />
                <button className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    );
}

export default User