import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Layouts
import AuthLayout from "./layout/AuthLayout"
import RootLayout from "./layout/RootLayout"
//Pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Attendance from "./pages/Attendance"
import Dashboard from "./pages/Dashboard"
import Report from "./pages/Report"
import Student from "./pages/Student"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  },
  {
    path: "/",
    element: <RootLayout />,
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
        path: "student",
        element: <Student />
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
