import { NavBar } from "../ui/components"
import { LoggedPage } from "./LoggedPage"

export const AdminPage = () => {
  return(
    <>
      <NavBar user="admin"/>
      <LoggedPage />
    </>
  )
}