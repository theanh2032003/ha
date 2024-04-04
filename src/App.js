import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
function NoMatch() {
  return (
  <div style={{ padding: 20 }}>
  <h2>404: Page Not Found</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
  </div>
  );
  }

  function App() {
  return (
<Router>
<nav style={{ margin: 10 }}>
<Link to="/" style={{ padding: 5 }}> Home </Link>
<Link to="/about" style={{ padding: 5 }}> About </Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<NoMatch />} />
</Routes>
</Router>
  );
  }
  export default App;