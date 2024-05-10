import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useDetectedUSer = () => {
  const location = useLocation()

  const [user, setUser] = useState("")

  useEffect(() =>{
    location.pathname.includes("admin") ? setUser("admin") : setUser("driver")
  })
  
  return user
}