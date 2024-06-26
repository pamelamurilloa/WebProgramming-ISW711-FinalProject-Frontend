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
import MainLayout from './components/layouts/MainLayout'
import LoginForm from './components/organisms/LoginForm'
import RegisterForm from './components/organisms/RegisterForm'
import VideoFeed from './components/organisms/VideoFeed/VideoFeed';
import AvatarEntry from './components/organisms/AvatarEntry';
import Administration from './components/pages/Administration';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Navigate replace to ="/login"/>}/>
      <Route path="login" element={<LoginForm />}/>
      <Route path="register" element={<RegisterForm />}/>
      <Route path="avatar" element={<AvatarEntry />}/>
      <Route path="videoFeed" element={<VideoFeed />}/>
      <Route path="administration" element={<Administration />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
