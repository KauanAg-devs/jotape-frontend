'use client'

import Header from "../components/Header"
import ImageButton from "../components/image-button"
import ImageButtons from "../components/image-buttons"
import SearchInput from "../components/home/search-input"
import Main from "../components/home/main/main"
import MainPosts from "../components/home/main/main-posts"
import { useSession } from "next-auth/react"

function Home(){
   const {data, status} = useSession()
   console.log(data, status);
   
   return (
    <>
        <Header>   
          <div className="hidden md:block w-1/4"></div>

          <div className="flex-grow w-full flex justify-center items-center">
            <SearchInput
              height="h-10 sm:h-12 md:h-14 lg:h-16"
              width="sm:w-52 md:w-full"
              placeholder="Buscar..."
            />
          </div>

          <ImageButtons>
            <ImageButton
              title="What's on your mind?"
              height="h-4 sm:h-5 md:h-6 lg:h-7"
              width="w-4 sm:w-5 md:w-6 lg:w-7"
              image={ <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" /> }
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
        </Header>

        <Main>
          <MainPosts/>
        </Main>
      </>
   )
}

export default Home