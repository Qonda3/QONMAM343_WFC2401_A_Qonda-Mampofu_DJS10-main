import { useEffect, useState } from 'react';
import './App.css';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetching the blog posts from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        return response.json();
      })
      .then(data => setPosts(data))  // Set the fetched posts to the state
      .catch(error => setError(error.message));  // Catch any errors and set the error state
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the list of posts
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;