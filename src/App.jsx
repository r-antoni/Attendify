//React Router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// React Toast
import {Toaster} from "react-hot-toast";
//Private & Protected Route
import PrivateRoute from "./router/PrivateRoute";
import ProtectedRoute from "./router/ProtectedRoutes";
//Layouts
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
// Landing Page
import LandingPage from "./pages/LandingPage";
//Auth Pages
import Login from "./pages/LoginPage";
//Pages
import Absence from "./pages/Absence";
import AbsentApp from "./pages/AbsentApp";
import AbsentAppAdd from "./pages/AbsentAppAdd";
import AccessDenied from "./pages/AccessDenied";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Report from "./pages/Report";
import Student from "./pages/Student";
import StudentAdd from "./pages/StudentAdd";
import Subject from "./pages/Subject";
import SubjectAdd from "./pages/SubjectAdd";
import Teacher from "./pages/Teacher";
import TeacherAdd from "./pages/TeacherAdd";
import TeacherUpdate from "./pages/TeacherUpdate";
import StudentUpdate from "./pages/StudentUpdate";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
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
        element: <PrivateRoute roleRequired={["Admin", "Teacher"]} />,
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
            element: <PrivateRoute roleRequired={["Admin"]} />,
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
                path: "students",
                element: <Student />,
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
                path: "add-student",
                element: <StudentAdd />,
              },
              {
                path: "add-teacher",
                element: <TeacherAdd />,
              },
              {
                path: "/teachers/update-teacher/:id",
                element: <TeacherUpdate />,
              },
              {
                path: "/students/update-student/:id",
                element: <StudentUpdate />,
              },
            ],
          },
        ],
      },
      {
        element: <PrivateRoute roleRequired={["Student"]} />,
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
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
