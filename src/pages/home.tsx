import Header from "../components/Header"
import CreatePostImageButton from "../components/home/create-post-image-button"
import ImageButtons from "../components/home/image-buttons"
import NotificationsImageButton from "../components/home/notifications-image-button"
import SearchInput from "../components/home/search-input"
import SettingsImageButton from "../components/home/settings-image-button"
import UserProfileImageButton from "../components/home/user-profile-image-button"

function Home(){
   return (
      <>
        <Header>
          <div></div>

          <SearchInput
            height="h-10 sm:h-12 md:h-14 lg:h-16"
            width="w-52 sm:w-64 md:w-72 lg:w-80"
            placeholder="Buscar..."
          />
                
          <ImageButtons>
            <CreatePostImageButton 
              height="h-4 sm:h-5 md:h-6 lg:h-7"
              width="w-4 sm:w-5 md:w-6 lg:w-7"
            />
            <NotificationsImageButton
              height="h-4 sm:h-5 md:h-6 lg:h-7"
              width="w-4 sm:w-5 md:w-6 lg:w-7"
            />
            <UserProfileImageButton
              height="h-4 sm:h-5 md:h-6 lg:h-7"
              width="w-4 sm:w-5 md:w-6 lg:w-7"
            />
            <SettingsImageButton
              height="h-4 sm:h-5 md:h-6 lg:h-7"
              width="w-4 sm:w-5 md:w-6 lg:w-7"
            />
            </ImageButtons>
        </Header>
      </>
   )
}

export default Home