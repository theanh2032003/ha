
function PostLists() {
    const BlogPosts = {
        'first-blog-post': {
          title: 'First Blog Post',
          description: 'Lorem ipsum dolor sit amet, consectetur adip.'
        },
        'second-blog-post': {
          title: 'Second Blog Post',
          description: 'Hello React Router v6'
        }
      };
      
    return (
    <ul>
    {Object.entries(BlogPosts).map(([slug, { title }]) => (
    <li key={slug}>
    <h3>{title}</h3>
    </li> ))}
    </ul>
    );
    }
  export default PostLists;
