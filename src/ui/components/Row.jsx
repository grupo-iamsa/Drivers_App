
export const Row = ({ children, bg, cols="1", className }) => {
  console.log(className)
  if(bg === "gray"){
    return(
      <div className={`py-2 px-2 text-sm bg-gray-200 grid grid-cols-${cols} ${className}`}>
        { children }
      </div>
    )
  }else{
    return(
      <div className={`py-2 px-2 grid text-sm grid-cols-${cols} ${className}`}>
        { children }
      </div>
    )
  }
}