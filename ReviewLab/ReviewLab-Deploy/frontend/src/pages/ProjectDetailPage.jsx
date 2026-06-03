import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectService } from '../services/projectService';
import { Navbar } from '../components/Navbar';

export function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectService.getProjectById(id);
        setProject(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="project-detail-container">
          <div className="loading">Loading project...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="project-detail-container">
          <div className="error-message">{error}</div>
        </div>
      </>
    );
  }

  const defaultImage = 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <>
      <Navbar />
      <div className="project-detail-container">
        <div className="project-detail">
          <img 
            src={project?.image_url || defaultImage} 
            alt={project?.title} 
            className="project-detail-image"
          />
          
          <div className="project-detail-content">
            <h1>{project?.title}</h1>
            
            {project?.category && (
              <span className="project-detail-category">{project.category}</span>
            )}
            
            <p className="project-detail-author">
              By <strong>{project?.author_name || 'Anonymous'}</strong>
            </p>
            
            <div className="project-detail-dates">
              <small>
                Created: {new Date(project?.created_at).toLocaleDateString()}
              </small>
            </div>
            
            <div className="project-detail-description">
              <h2>Description</h2>
              <p>{project?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
