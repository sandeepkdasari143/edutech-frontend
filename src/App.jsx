import React from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomeLayout from './HomeLayout';

// import { useSelector } from 'react-redux';


// export const AuthProtectionWrapper = ({ children }) => {
//     const navigate = useNavigate();
//     const [isLoggedIn] = React.useState(useSelector((state) => state.auth.isExistingUser));
//     const isUserExists = useSelector((state) => state.auth.isExistingUser);
//     if (!isLoggedIn) {
//         return <Navigate replace to="/signin"/>;
//     }
//     return children;
// }

const App = () => {
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<div className = "text-center flex items-center justify-center h-[90vh] w-[100%] text-white font-bold text-6xl">Under Construction</div> }/>
                    </Route>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App