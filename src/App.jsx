//React Router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
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
import Absence from "./pages/Absence";
import AbsentApp from "./pages/AbsentApp";
import AbsentAppAdd from "./pages/AbsentAppAdd";
import AccessDenied from "./pages/AccessDenied";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Report from "./pages/Report";
import Students from "./pages/Students";
import Subject from "./pages/Subject";
import SubjectAdd from "./pages/SubjectAdd";
import Teacher from "./pages/Teacher";
import TeacherAdd from "./pages/TeacherAdd";

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
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        element: <PrivateRoute roleRequired={"Admin" || "Teacher"} />,
        children: [
          {
            path: "attendance",
            element: <Attendance />,
          },

          {
            path: "reports",
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
                element: <Absence />,
              },
              {
                path: "teachers",
                element: <Teacher />,
              },
              {
                path: "subjects",
                element: <Subject />,
              },
              {
                path: "add-subject",
                element: <SubjectAdd />,
              },
              {
                path: "add-teacher",
                element: <TeacherAdd />,
              },
            ],
          },
        ],
      },
      {
        element: <PrivateRoute roleRequired="Student" />,
        children: [
          {
            path: "absent-app",
            element: <AbsentApp />,
          },
          {
            path: "form-submission",
            element: <AbsentAppAdd />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "denied",
    element: <AccessDenied />,
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
