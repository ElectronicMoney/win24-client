import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from '../pages/loading';

const HomeLayout  = React.lazy(() => import('../layouts/HomeLayout'));
const AppLayout   = React.lazy(() => import('../layouts/AppLayout'));
const AdminLayout = React.lazy(() => import('../layouts/AdminLayout'));

const Home = React.lazy(() => import("../pages"));
const AppHome  = React.lazy(() => import("../pages/home"));
const Games = React.lazy(() => import("../pages/games"));
const Login = React.lazy(() => import("../pages/login"));
const Register = React.lazy(() => import("../pages/register"));
const ForgetPassword = React.lazy(() => import("../pages/passwords"));
const Admins = React.lazy(() => import("../pages/admins"));
const Dashboard = React.lazy(() => import("../pages/admins/Dashboard"));
const Wallet = React.lazy(() => import("../pages/wallets"));
const Recharge = React.lazy(() => import("../pages/recharge"));
const Withdraw = React.lazy(() => import("../pages/withdraw"));
const NotFound = React.lazy(() => import("../pages/notfound"));



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
                        <Route path="forget-passwords" element={<ForgetPassword />} />
                        <Route path="admins" element={<Admins />} />
                    </Route>

                    {/* App Layout Routes */}
                    <Route path="/app" element={<AppLayout />}>
                        <Route index element={<AppHome />} />
                        <Route path="about-us" element={<AppHome />} />
                        <Route path="customer-service" element={<AppHome />} />
                        <Route path="game-rules" element={<Games />} />
                        <Route path="withdraw" element={<Withdraw />} />
                        <Route path="recharge" element={<Recharge />} />
                        <Route path="games" element={<Games />} />
                        <Route path="invites" element={<Games />} />
                        <Route path="wallets" element={<Wallet />} />
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
  