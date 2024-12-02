type SettingsImageButtonProps = {
    width: string,
    height: string, 
}

export default function SettingsImageButton({width, height}: SettingsImageButtonProps){
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
                    <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.38a2 2 0 00-.73-2.73l-.15-.1a2 2 0 01-1-1.72v-.51a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2h-.44zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-100 text-gray-600 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Settings
            </span>
        </div>
    )
}