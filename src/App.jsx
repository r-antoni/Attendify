//React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Private & Protected Route
import PrivateRoute from "./router/PrivateRoute";
import ProtectedRoute from "./router/ProtectedRoutes";
//Layouts
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
//AuthPages
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
//Pages
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Students from "./pages/Students";
import Absence from "./pages/Absence";
import Teacher from "./pages/Teacher"
import Subject from "./pages/Subject"
import AbsentApp from "./pages/AbsentApp";
import SubjectAdd from "./pages/SubjectAdd";
import TeacherAdd from "./pages/TeacherAdd";
import Error from "./pages/Error"
import AccessDenied from "./pages/AccessDenied";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ]
  },
  {
    element: <RootLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "attendance",
            element: <Attendance />,
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
          {
            element: <PrivateRoute roleRequired="Admin" />,
            children: [
              {
                path: "absence",
                element: <Absence />
              },
              {
                path: "teacher",
                element: <Teacher />
              },
              {
                path: "subject",
                element: <Subject />
              },
              {
                path: "subject-add",
                element: <SubjectAdd />,
              },
              {
                path: "teacher-add",
                element: <TeacherAdd />,
              },
            ]
          },
          {
            element: <PrivateRoute roleRequired="student" />,
            children: [
              {
                path: "formsubmission",
                element: <AbsentApp />
              },
            ]
          },
        ],
      },
    ]
  },
  {
    path: "*",
    element: <Error />
  },
  {
    path: "denied",
    element: <AccessDenied />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
