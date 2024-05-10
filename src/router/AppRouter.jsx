import { Route, Routes } from "react-router-dom"
import { GraphicsPage, HomePage, LoggedPage, LoginPage } from "../pages"

export const AppRouter = () =>{
  return(

    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/admin" element={ <LoggedPage />} />
      <Route path="/user" element={ <LoggedPage />} />
      <Route path="/admin/graphics" element={ <GraphicsPage />} />
      <Route path="/user/graphics" element={ <GraphicsPage />} />
    </Routes>

  )
}