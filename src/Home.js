import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blogs');
        setPosts(response.data);
        setLoading(false);
        console.log(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      {posts.map(post => (
        <div key={post.slug}>
          <h3>{post.title}</h3>
          <h4>{post.content}</h4>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
