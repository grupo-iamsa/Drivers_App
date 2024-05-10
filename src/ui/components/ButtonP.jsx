export const ButtonP = ({ children, textSize, full, onClick}) =>{
if(full){
  return(
    <button 
      className={`${textSize} w-full bg-blue-p text-white py-2 rounded-md active:scale-90 transition-all`} 
    onClick={(e) => onClick(e)}
    >
      { children }
    </button>
  )
}else{
  return(
    <button 
      className={`${textSize} bg-blue-p text-white py-2 px-8 rounded-md active:scale-90 transition-all`} 
    onClick={(e) => onClick(e)}
    >
      { children }
    </button>
  )
}
}