import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Private & Protected Route
import PrivateRoute from "./router/PrivateRoute";
import ProtectedRoute from "./router/ProtectedRoutes";
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


const router = createBrowserRouter([
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
        path: "formsubmission",
        element: <AbsentApp />
      },
      
      {
        path: "subjectadd",
        element: <SubjectAdd />,
      },
      {
        path: "teacher-add",
        element: <TeacherAdd />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />
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
