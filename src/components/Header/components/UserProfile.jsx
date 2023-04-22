import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../../redux/auth/authSlice';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate()
    const userDetails = useSelector((state) => state.auth.existingUserCredentials);
    const dispatch = useDispatch();
    
    const logOutTheUser = async () => {
        if (userDetails) {
            try {
                URL = 'http://localhost:369/api/v1/logout'
                const response = await fetch(URL);
                const data = await response.json();

                if (!data?.success) {
                    return toast.error(data?.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                }
                
                // TODO: Dispatch the LOGOUT Action...
                dispatch(LOGOUT());
                toast.warning(data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                
            } catch (error) {
                return toast.error(error?.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
            }
        }
    }

    return (
        <div className="ml-5 hidden lg:block">
            <div className="flex items-center space-x-2">
                <img
                    className="inline-block w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt={userDetails?.username}
                />
                <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {userDetails?.username}
                    </span>
                    <button onClick={logOutTheUser}
                        className="text-normal font-medium text-red-500 dark:text-red-400 cursor-pointer">
                        LogOut
                    </button>
                </span>
            </div>
        </div>
    )
}

export default UserProfile