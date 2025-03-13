import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ArticleScreen from "./Screens/ArticleScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import './App.css'

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
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
