const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());


// Danh sách blog (tạm thời hardcode)
const blogs = [
  { id: 1, title: 'Blog 1', content: 'Content of blog 1' },
  { id: 2, title: 'Blog 2', content: 'Content of blog 2' }
];

// API trả về danh sách blog
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

// API trả về nội dung chi tiết 1 bài blog dựa trên ID
app.get('/api/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(blog => blog.id === blogId);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
