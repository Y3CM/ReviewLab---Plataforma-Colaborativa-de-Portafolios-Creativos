import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div className="project-card">
      <img 
        src={project.image_url || defaultImage} 
        alt={project.title} 
        className="project-card-image"
      />
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">
          {project.description?.substring(0, 100)}...
        </p>
        {project.category && (
          <span className="project-card-category">{project.category}</span>
        )}
        <p className="project-card-author">by {project.author_name || 'Anonymous'}</p>
        <Link 
          to={`/projects/${project.id}`} 
          className="project-card-link"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
