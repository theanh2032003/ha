
function PostLists() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blog-posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
      
    return (
      <div>
      {Object.keys(posts).map((key) => (
        <div key={key}>
          <h2>{posts[key].title}</h2>
          <p>{posts[key].description}</p>
        </div>
      ))}
    </div>
    );
    }
  export default PostLists;
