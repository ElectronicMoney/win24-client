import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from '../containers/Loading';

const HomeLayout  = React.lazy(() => import('../layouts/HomeLayout'));
const AppLayout   = React.lazy(() => import('../layouts/AppLayout'));
const AdminLayout = React.lazy(() => import('../layouts/AdminLayout'));

const Home  = React.lazy(() => import("../containers/Home"));
const Games = React.lazy(() => import("../containers/Games"));
const Login = React.lazy(() => import("../containers/Login"));
const Register = React.lazy(() => import("../containers/Register"));
const Admins = React.lazy(() => import("../containers/Admins"));
const Dashboard = React.lazy(() => import("../containers/Dashboard"));
const AppHome = React.lazy(() => import("../containers/AppHome"));
const NotFound = React.lazy(() => import("../containers/NotFound"));



export default function AppRouter() {
    return (
        <Router>
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    {/* Home Layout Routes */}
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="admins" element={<Admins />} />
                    </Route>

                    {/* App Layout Routes */}
                    <Route path="/app" element={<AppLayout />}>
                        <Route index element={<AppHome />} />
                        <Route path="about-us" element={<AppHome />} />
                        <Route path="customer-service" element={<AppHome />} />
                        <Route path="account-security" element={<AppHome />} />
                        <Route path="game-rules" element={<Games />} />
                        <Route path="games" element={<Games />} />
                        <Route path="invites" element={<Games />} />
                        <Route path="wallets" element={<Games />} />
                        <Route path="settings" element={<AppHome />} />
                    </Route>

                    {/* Admin Layout Routes */}
                    <Route path="admins" element={<AdminLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="users" element={<Dashboard />} />
                        <Route path="games" element={<Dashboard />} />
                        <Route path="bets" element={<Dashboard />} />
                        <Route path="payments" element={<Dashboard />} />
                        <Route path="news" element={<Dashboard />} />
                        <Route path="supports" element={<Dashboard />} />
                        <Route path="settings" element={<Dashboard />} />
                        <Route path="logout" element={<Dashboard />} />
                    </Route>
                    {/* Not Found Page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </React.Suspense>
        </Router>
    );
  }
  