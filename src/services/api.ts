import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Blog {
  id: number;
  title: string;
  content: string;
  created_at: string;
  // Add other fields based on your Blog model
}

export interface Comment {
  id: number;
  content: string;
  blog: number;
  created_at: string;
  // Add other fields based on your Comment model
}

// Blog API calls
export const getBlogList = async (): Promise<Blog[]> => {
  const response = await axios.get(`${API_BASE_URL}/blogs/`);
  return response.data;
};

export const getBlogDetail = async (id: number): Promise<Blog> => {
  const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
  return response.data;
};

export const createBlog = async (blogData: Omit<Blog, 'id'>): Promise<Blog> => {
  const response = await axios.post(`${API_BASE_URL}/blogs/`, blogData);
  return response.data;
};

// Comment API calls
export const getCommentList = async (): Promise<Comment[]> => {
  const response = await axios.get(`${API_BASE_URL}/comments/`);
  return response.data;
};

export const createComment = async (commentData: Omit<Comment, 'id'>): Promise<Comment> => {
  const response = await axios.post(`${API_BASE_URL}/comments/`, commentData);
  return response.data;
};

export const deleteComment = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/comments/${id}`);
};
