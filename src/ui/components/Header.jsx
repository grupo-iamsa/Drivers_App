export const Header = ({ children, className }) => {
  return(
    <header className={`${className} bg-blue-p py-1 px-2 text-white font-semibold`}>
      <h3>{ children }</h3>
    </header>
  )
}