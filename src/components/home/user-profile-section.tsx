import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import { clearUser } from "../../store/slices/user-slice";
import { signOut } from "next-auth/react";


const UserProfileData = () => {
    const user = useSelector((state: any) => state.userReducer);
  
    return (
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          {user.image ? (
            <img className="rounded-full" src={user.image} alt="user-profile" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}
        </div>
  
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {user.name || "Guest"}
          </h2>
          <p className="text-sm text-gray-500">{user.email || "Not logged in"}</p>
        </div>
      </div>
    );
  };

const MyProfileButton = () => (
  <li>
    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span>My Profile</span>
    </button>
  </li>
);

const SettingsButton = () => (
  <li>
    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span>Settings</span>
    </button>
  </li>
);


const LogoutButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state: any) => state.userReducer);
  
    const handleAuthAction = async () => {
      if (!user.email) return router.push('/signup');

        dispatch(clearUser());
        await signOut({
          redirect: false,
        });
    };
  
    return (
      <button
        onClick={handleAuthAction}
        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2 text-red-500"
      >
        {user.email ? "Logout" : "Login"}
      </button>
    );
  };




export default function UserProfileSection() {
  return (
    <div className="relative col-start-3 left-40 w-80 bg-white shadow-lg rounded-lg border border-gray-200 p-4 animate-slide-in">
      <UserProfileData />
      <div className="border-t border-gray-200 pt-4">
        <ul className="space-y-2">
          <MyProfileButton />
          <SettingsButton />
          <LogoutButton />
        </ul>
      </div>
    </div>
  );
}
