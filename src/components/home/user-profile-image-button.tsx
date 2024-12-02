type UserProfileImageButtonProps = {
    height: string,
    width: string 
}

export default function UserProfileImageButton({width, height}: UserProfileImageButtonProps){
    return (
        <div className="relative group">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300 ease-in-out">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`${width} ${height} text-gray-600`}
                >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-100 text-gray-600 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Profile
            </span>
        </div>
    )
}