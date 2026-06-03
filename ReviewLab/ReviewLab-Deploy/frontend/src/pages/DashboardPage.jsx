import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { Navbar } from '../components/Navbar';

export function DashboardPage() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1>Welcome, {user?.name}!</h1>
          <p>You're logged in to ReviewLab</p>
          
          <div className="dashboard-actions">
            <button 
              onClick={() => navigate('/projects')}
              className="btn btn-primary"
            >
              View All Projects
            </button>
            <button 
              onClick={() => navigate('/projects/create')}
              className="btn btn-secondary"
            >
              Create New Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
