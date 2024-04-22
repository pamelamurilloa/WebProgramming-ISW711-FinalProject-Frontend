import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from './contexts/authContext';
import './components/scssGlobal/all.scss'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import LoginForm from './components/organisms/LoginForm/LoginForm'
import RegisterForm from './components/organisms/RegisterForm/RegisterForm'
import VideoFeed from './components/organisms/VideoFeed/VideoFeed';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Navigate replace to ="/login"/>}/>
      <Route path="login" element={<LoginForm />}/>
      <Route path="register" element={<RegisterForm />}/>
      <Route path="avatar" element={<VideoFeed />}/>
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          loader={redirectIfUser}
        />
        <Route path="logout" action={logoutUser} />
      </Route> */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
