import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Abc from './pages/abc';
import App from './pages/index';
const AppRoutes = () => (
    <Router>
        <Routes>
            <Route index element={<App />} />
            <Route path="abc" element={<Abc />} />
        </Routes>
    </Router>
);

export default AppRoutes;