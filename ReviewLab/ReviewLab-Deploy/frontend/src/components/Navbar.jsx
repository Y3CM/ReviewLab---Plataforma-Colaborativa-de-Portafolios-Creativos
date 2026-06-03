import { Link } from 'react-router-dom';
import { authService } from '../services/authService';

export function Navbar() {
  const user = authService.getCurrentUser();
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.jpg" alt="ReviewLab" className="navbar-logo-img" />
          <span>ReviewLab</span>
        </Link>
        <div className="navbar-menu">
          {isAuthenticated ? (
            <>
              <span className="navbar-user">Welcome, {user?.name}</span>
              <Link to="/projects" className="navbar-link">Projects</Link>
              <Link to="/projects/create" className="navbar-link">Create Project</Link>
              <button onClick={handleLogout} className="navbar-btn logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="navbar-link">Register</Link>
              <Link to="/login" className="navbar-link">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
