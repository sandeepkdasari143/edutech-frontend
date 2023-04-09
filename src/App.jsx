import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomeLayout from './HomeLayout';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/" element={<HomeLayout />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App