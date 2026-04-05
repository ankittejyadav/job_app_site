import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/jobs', { replace: true });
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = login(email, password);
    if (result.success) {
      navigate('/jobs');
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light-custom">
      <div className="card border-0 shadow login-card" style={{ maxWidth: '420px', width: '100%' }}>
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <div className="login-icon-circle mx-auto mb-3">
              <i className="bi bi-briefcase-fill fs-2 text-white"></i>
            </div>
            <h3 className="fw-bold text-primary-custom">Welcome to JobVault</h3>
            <p className="text-muted small">Sign in to discover your next opportunity</p>
          </div>

          {error && (
            <div className="alert alert-danger d-flex align-items-center py-2" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <span className="small">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label small fw-medium">Email address</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="bi bi-envelope text-muted"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control border-start-0"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label small fw-medium">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="bi bi-lock text-muted"></i>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="form-control border-start-0 border-end-0"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="input-group-text bg-light border-start-0"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-muted`}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary-custom w-100 py-2 fw-medium">
              <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
            </button>
          </form>

          <div className="mt-4 p-3 bg-light rounded small">
            <p className="fw-medium mb-1 text-muted">Demo credentials:</p>
            <code className="d-block text-dark">demo@jobvault.com / Demo1234</code>
          </div>
        </div>
      </div>
    </div>
  );
}
