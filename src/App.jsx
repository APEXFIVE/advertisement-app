import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import "./App.css";
import "./Dashboard.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Dashboard/Overview";
import Settings from "./pages/Dashboard/Settings";
import DashboardLayout from "./Layouts/DashboardLayout";
import Add from "./pages/forms/Add";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Edit from "./pages/forms/Edit";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
{
  path: "/login",
  element: <Login/>,
},
{
  path: "/add",
  element: <Add/>,
},
{
  path: "/register",
  element: <Register/>,
},
    
   {
    path:"/edit",
    element: <Edit/>,
   }, 
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
