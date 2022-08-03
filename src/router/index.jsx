import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from '../pages/loading';
import { AdminAuth } from '../features/auth/AdminAuth';
import { RequiredAuth } from '../features/auth/RequiredAuth';

const HomeLayout      = React.lazy(() => import('../layouts/HomeLayout'));
const AppLayout       = React.lazy(() => import('../layouts/AppLayout'));
const AdminLayout     = React.lazy(() => import('../layouts/AdminLayout'));

const Users           = React.lazy(() => import("../pages/admin/users"));
const Payments           = React.lazy(() => import("../pages/admin/payments"));

const Home            = React.lazy(() => import("../pages"));
const AppHome         = React.lazy(() => import("../pages/home"));
const AboutUs         = React.lazy(() => import("../pages/about"));
const CustomerService = React.lazy(() => import("../pages/supports"));
const InviteFriends   = React.lazy(() => import("../pages/invites"));
const Settings        = React.lazy(() => import("../pages/settings"));
const Games           = React.lazy(() => import("../pages/games"));
const Login           = React.lazy(() => import("../pages/login"));
const Register        = React.lazy(() => import("../pages/register"));
const ForgetPassword  = React.lazy(() => import("../pages/passwords"));
const AdminLogin      = React.lazy(() => import("../pages/admin/login"));
const Dashboard       = React.lazy(() => import("../pages/admin/dashboard"));
const Wallet          = React.lazy(() => import("../pages/wallets"));
const GameRules       = React.lazy(() => import("../pages/rules"));
const Recharge        = React.lazy(() => import("../pages/recharge"));
const Withdraw        = React.lazy(() => import("../pages/withdraw"));
const NotFound        = React.lazy(() => import("../pages/notfound"));


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
                        <Route path="admin" element={<AdminLogin />} />
                    </Route>

                    {/* App Layout Routes */}
                    <Route path="/app" 
                        element={
                        <RequiredAuth>
                            <AppLayout />
                        </RequiredAuth>
                        } 
                    >
                        <Route index element={<AppHome />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="customer-service" element={<CustomerService />} />
                        <Route path="game-rules" element={<GameRules />} />
                        <Route path="withdraw" element={<Withdraw />} />
                        <Route path="recharge" element={<Recharge />} />
                        <Route path="games" element={<Games />} />
                        <Route path="invites" element={<InviteFriends />} />
                        <Route path="wallets" element={<Wallet />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>

                    {/* Admin Layout Routes */}
                    <Route path="admin"
                     element={
                        <AdminAuth>
                            <AdminLayout />
                        </AdminAuth>
                        } 
                    >
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="games" element={<Dashboard />} />
                        <Route path="bets" element={<Dashboard />} />
                        <Route path="payments" element={<Payments />} />
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
  