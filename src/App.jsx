import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Private & Protected Route
import PrivateRoute from "./router/PrivateRoute";
import ProtectedRoute from "./router/ProtectedRoutes";
//AuthPages
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
//Pages
import Attendance from "./pages/Attendance";
import AttendanceSheet from "./pages/AttendanceSheet";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Students from "./pages/Students";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        index:true,
        element: <Login />,

      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "attendance",
        element: <Attendance />,
      },
      {
        path: "attendance-sheet",
        element: <AttendanceSheet />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "students",
        element: <Students />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
