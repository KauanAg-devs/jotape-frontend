import React from "react"

type ImageButtonsProps = {
  children: React.ReactNode
}

export default function ImageButtons({children}: ImageButtonsProps){
    return (
        <div className="flex items-center space-x-5">

          {children}
        </div>
    )
}