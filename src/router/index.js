import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from '../containers/Loading';
const Home  = React.lazy(() => import("../containers/Home"));
const Games = React.lazy(() => import("../containers/Games"));
const NotFound = React.lazy(() => import("../containers/NotFound"));


export default function AppRouter() {
    return (
        <React.Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Home />} />
                    <Route path="register" element={<Home />} />
                    <Route path="games" element={<Games />} />
                    <Route path="loading" element={<Loading />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
  }
  