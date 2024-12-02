import React from "react"

type HeaderProps = {
    children: React.ReactNode
}

export default function Header({children}: HeaderProps){
    return (
        <header className="h-32 w-screen flex flex-col md:flex-row justify-around items-center">
            {children}
        </header>
    )
}