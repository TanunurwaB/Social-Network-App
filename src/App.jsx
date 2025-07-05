import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import "./style.scss";
import { use } from "react";
import { DarkModeContext } from "./context/darkModeContext.jsx";

function App() {
  const currentUser = true;

const darkMode = useContext(DarkModeContext);
console.log(darkMode);


  const Layout = () => {
    return (
      <div className="theme-dark" >
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: "6"}}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
