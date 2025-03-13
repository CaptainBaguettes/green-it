import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { lazy } from 'react';
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import './App.css'
import PublicRoute from "./Components/Routes/PublicRoute";

const ArticleScreen = lazy(() => import("./Screens/ArticleScreen"));
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));
const LoginScreen = lazy(() => import("./Screens/LoginScreen"));
const SignupScreen = lazy(() => import("./Screens/SignupScreen"));
const PreferenceScreen = lazy(() => import("./Screens/PreferenceScreen"));

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomeScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/article/:category/:subCategory"
              element={
                <ProtectedRoute>
                  <ArticleScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/preference"
              element={
                <ProtectedRoute>
                  <PreferenceScreen />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={
              <PublicRoute>
                <SignupScreen />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
