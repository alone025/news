export const baseUrl = 'https://dennews-back.onrender.com'


export const fetchCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/category/all`);
      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data; // Assuming the API returns { categories: [...] }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return []; // Return an empty array in case of error
    }
  };

  export const fetchCategory = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/category/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data; // Assuming the API returns { categories: [...] }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return []; // Return an empty array in case of error
    }
  };
  
  export const fetchPosts = async () => {
    try {
     
      const response = await fetch(`${baseUrl}/api/post/all`);
      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data; // Assuming the API returns { posts: [...] }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return []; // Return an empty array in case of error
    }
  };
  

  export const fetchPost = async (id) => {
    try {
     
      const response = await fetch(`${baseUrl}/api/post/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data; // Assuming the API returns { posts: [...] }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return []; // Return an empty array in case of error
    }
  };

  export const fetchLastPosts = async () => {
    try {
     
      const response = await fetch(`${baseUrl}/api/post/last20`);
      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data; // Assuming the API returns { posts: [...] }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return []; // Return an empty array in case of error
    }
  };