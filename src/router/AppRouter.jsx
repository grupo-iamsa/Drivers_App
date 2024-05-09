import { Route, Routes } from "react-router-dom"
import { AdminPage, HomePage, LoginPage, UserPage } from "../pages"

export const AppRouter = () =>{
  return(

    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/user" element={ <UserPage />} />
      <Route path="/admin" element={ <AdminPage />} />
    </Routes>

  )
}