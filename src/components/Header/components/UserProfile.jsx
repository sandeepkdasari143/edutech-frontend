import React from 'react'

const UserProfile = () => {
    return (
        <div className="ml-5 hidden lg:block">
            <div className="flex items-center space-x-2">
                <img
                    className="inline-block w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="John Doe"
                />
                <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        John Doe
                    </span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 cursor-pointer">
                        View Profile
                    </span>
                </span>
            </div>
        </div>
    )
}

export default UserProfile