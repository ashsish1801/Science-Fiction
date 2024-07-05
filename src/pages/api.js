const API_URL = 'https://child.onrender.com/api/sciencefiction';

export const fetchStories = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchStoryById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};
