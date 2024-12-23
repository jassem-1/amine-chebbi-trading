import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from "./App.jsx";
import "./index.css";
import AdminDashboard from './Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from "./AuthContext.jsx";
import Login from './components/Login';
import "./i18n"; // Import the i18n configuration file
import CryptoPage from "./components/crypto/CryptoPage.jsx";
import ForexPage from "./components/forex/ForexPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
     <AuthProvider>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>} /> {/* New Route */}
       
              <Route path="/crypto-group" element={<CryptoPage />} />
              <Route path="/forex-group" element={<ForexPage />} />



      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);