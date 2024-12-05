import React from "react"

type MainProps = {
    children: React.ReactNode
}

export default function Main({children}: MainProps){
  return (
    <header className="w-full h-auto flex flex-col items-center justify-center">
        {children}
    </header>
  )
}