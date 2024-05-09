export const Header = ({ children }) => {
  return(
    <header>
       <header className=" bg-blue-p py-1 px-2 text-white font-semibold">
        <h3>{ children }</h3>
      </header>
    </header>
  )
}