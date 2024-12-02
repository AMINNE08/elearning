import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import AdminDash from "./app/admin/pages/AdminDash.jsx";
import StudentList from "./app/student/pages/StudentList.jsx";
import CourseList from "./app/teacher/pages/CourseList.jsx";
import TeacherList from "./app/teacher/pages/TeacherList.jsx";
import Register from "./pages/Registre.jsx";
import Pages from "./pages/Pages.jsx";
import ProductForm from "./pages/ProductForm.jsx";
import ForgotPage from "./pages/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/admineDash",
    element:<AdminDash></AdminDash>
  },
  {
    path:"/teachers",
    element:<TeacherList />
  },
  {
    path:"/students",
    element:<StudentList />
  },
   {
    path:"/courses" ,
    element:<CourseList /> 
   },
   {
    path: "/registre",
    element:<Register/>
   },
   {
    path:"/pages",
    element:<Pages/>
   },
   {
    path:"/blog",
    element:<ProductForm/>
   },
   {
    path:"/forgotPage",
    element:<ForgotPage/>
   },
   {
    path:"/reset-password",
    element:<ResetPage/>
   },



  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
