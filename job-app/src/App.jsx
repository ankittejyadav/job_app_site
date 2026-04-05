import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import JobListingPage from './pages/JobListingPage';
import JobDetailPage from './pages/JobDetailPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <JobListingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/:id"
                element={
                  <ProtectedRoute>
                    <JobDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
          <footer className="bg-dark text-light text-center py-3 small">
            <i className="bi bi-briefcase-fill me-1"></i>
            JobVault &copy; {new Date().getFullYear()} &mdash; Find Your Next Opportunity
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
