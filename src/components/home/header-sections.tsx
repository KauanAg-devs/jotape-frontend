import { useState } from "react";
import ImageButton from "../image-button";
import ImageButtons from "../image-buttons";
import UserProfileSection from "./user-profile-section";

export default function HeaderSections() {
    const [showUserProfile, setShowUserProfile] = useState<boolean>(false)
    
    return (
        <>
            <ImageButtons>
                <ImageButton
                    title="What's on your mind?"
                    height="h-4 sm:h-5 md:h-6 lg:h-7"
                    width="w-4 sm:w-5 md:w-6 lg:w-7"
                    image={<path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />}
                />
                
                <ImageButton
                    title="Notifications"
                    height="h-4 sm:h-5 md:h-6 lg:h-7"
                    width="w-4 sm:w-5 md:w-6 lg:w-7"
                    image={<>
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </>}
                />
                
                <ImageButton
                    height="h-4 sm:h-5 md:h-6 lg:h-7"
                    width="w-4 sm:w-5 md:w-6 lg:w-7"
                    title='Profile'
                    setShowSomething={setShowUserProfile}
                    image={<>
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </>}
                />
                
                <ImageButton
                    title="Settings"
                    height="h-4 sm:h-5 md:h-6 lg:h-7"
                    width="w-4 sm:w-5 md:w-6 lg:w-7"
                    image={<path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.38a2 2 0 00-.73-2.73l-.15-.1a2 2 0 01-1-1.72v-.51a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2h-.44zM12 15a3 3 0 110-6 3 3 0 010 6z" />}
                />
            </ImageButtons>

            {showUserProfile && (
                <div className="col-start-3 mt-3 col-span-1">
                    <UserProfileSection />
                </div>
            )}
        </>
    )
}