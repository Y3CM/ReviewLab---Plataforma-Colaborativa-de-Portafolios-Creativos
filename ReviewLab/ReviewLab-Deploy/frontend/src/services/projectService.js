import api from './api';

export const projectService = {
  createProject: async (title, description, category, image_url) => {
    const response = await api.post('/projects', {
      title,
      description,
      category,
      image_url
    });
    return response.data;
  },

  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  getProjectById: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  }
};
