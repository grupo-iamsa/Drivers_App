export const ButtonP = ({ children, textSize, full=true }) =>{
if(full){
  return(
    <button className={`${textSize} w-full bg-blue-p text-white py-2 rounded-md`} >
      { children }
    </button>
  )
}else{
  return(
    <button className={`${textSize} bg-blue-p text-white py-2 px-8 rounded-md`} >
      { children }
    </button>
  )
}
}