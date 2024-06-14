import { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetching the blog posts from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('');
        }
        return response.json();
      })
      .then(data => setPosts(data))  // Set the fetched posts to the state
  }, []);

  // Render the list of posts
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;