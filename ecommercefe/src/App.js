import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "react-bootstrap"
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';
import Merchant from './components/Merchant';
import UserLogin from './components/UserLogin';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<Home />} />
            <Route path='/user_login' element={<UserLogin/>}></Route>
            <Route path='/register_user' element={<UserSignUp/>}/>
            <Route path='/merchant' element={<Merchant/>}/>
        </Routes>
         </BrowserRouter >
    );
}

export default App;