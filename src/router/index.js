import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from '../containers/Loading';
const Home  = React.lazy(() => import("../containers/Home"));
const Games = React.lazy(() => import("../containers/Games"));
const Login = React.lazy(() => import("../containers/Login"));
const Register = React.lazy(() => import("../containers/Register"));
const Admins = React.lazy(() => import("../containers/Admins"));
const NotFound = React.lazy(() => import("../containers/NotFound"));


export default function AppRouter() {
    return (
        <React.Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="admins" element={<Admins />} />
                    <Route path="games" element={<Games />} />
                    <Route path="loading" element={<Loading />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
  }
  