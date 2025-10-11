import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Profile from './pages/Profile.jsx'
import {createBrowserRouter,RouterProvider} from "react-router"
import {ActionForm} from "./Action/ActionForm.jsx"
import { LoaderForm } from './Loader/LoaderForm.jsx'
import { LoaderGet } from './Loader/LoaderGet.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>,action:ActionForm,loader:LoaderGet},
  {path:"/profile",element:<Profile/>,loader:LoaderForm}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
