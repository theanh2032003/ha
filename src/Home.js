import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blogs');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/addPost', {
        title,
        content
      });
      setPosts([...posts, response.data]); // Thêm bài đăng mới vào danh sách hiện tại
      setTitle(''); // Đặt lại trường tiêu đề sau khi thêm bài đăng
      setContent(''); // Đặt lại trường nội dung sau khi thêm bài đăng
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h4>{post.content}</h4>
          {/* <p>{post.description}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Home;
