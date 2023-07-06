import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Layouts
import AuthLayout from "./layout/AuthLayout"
import RootLayout, { rootLoader } from "./layout/RootLayout"
//AuthPages
import Login from "./pages/Login/LoginPage"
import ForgotPass from "./pages/Login/ForgotPass"
import Register from "./pages/Register/RegisterPage"
import Verification from "./pages/Register/Verification"
//Pages
import Attendance from "./pages/Attendance"
import Dashboard from "./pages/Dashboard"
import Report from "./pages/Report"
import Students from "./pages/Students"



const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />, 
        children: [
          {
            path: "identify",
            element: <ForgotPass />
          }
        ]
      },
      {
        path: "register",
        element: <Register />,
        children: [
          {
            path: "verification",
            element: <Verification />
          }
        ]
      },
    ]
  },
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        path:"attendance",
        element: <Attendance />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "report",
        element: <Report />
      },
      {
        path: "students",
        element: <Students />
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
