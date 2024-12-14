'use client';

import Header from "../components/Header";
import ImageButton from "../components/image-button";
import ImageButtons from "../components/image-buttons";
import SearchInput from "../components/home/search-input";
import Main from "../components/home/main/main";
import MainPosts from "../components/home/main/main-posts";
import { useSession } from "next-auth/react";
import HeaderSections from "../components/home/header-sections";
import { clearUser, setUser } from "../store/slices/user-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const { data, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated" && data?.user) {
      dispatch(setUser({ name: data.user.name, email: data.user.email, image: data.user.image }));
    }
  }, [data, status, dispatch]);

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

        <HeaderSections />
      </Header>

      <Main>
        <MainPosts />
      </Main>
    </>
  );
}

export default Home;
