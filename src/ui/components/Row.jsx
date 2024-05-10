import { useEffect, useState } from "react"

export const Row = ({ children, bg, cols="1", className ="" }) => {

  const [ alignCols, setAlignCols ] =  useState("grid-cols-1")

  useEffect(() =>{
    if( cols == 2 ) setAlignCols("grid-cols-2")
  }, [cols])

  if(bg === "gray"){
    return(
      <div className={`py-2 px-2 text-sm bg-gray-200 items-center grid ${alignCols} ${className}`}>
        { children }
      </div>
    )
  }else{
    return(
      <div className={`py-2 px-2 text-sm items-center grid ${alignCols} ${className}`}>
        { children }
      </div>
    )
  }
}