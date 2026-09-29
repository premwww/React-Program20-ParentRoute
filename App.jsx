import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/blog">Go to Blog</Link>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>

      <nav>
        <Link to="/blog/post1">Post 1</Link> |{" "}
        <Link to="/blog/post2">Post 2</Link>
      </nav>

      <hr />

      {/* Child routes appear here */}
      <Outlet />
    </div>
  );
}

function Post1() {
  return (
    <div>
      <h2>Blog Post 1</h2>
      <p>This is the first blog post.</p>
    </div>
  );
}

function Post2() {
  return (
    <div>
      <h2>Blog Post 2</h2>
      <p>This is the second blog post.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/blog">Blog</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="/blog" element={<Blog />}>

          {/* Nested Child Routes */}
          <Route path="post1" element={<Post1 />} />
          <Route path="post2" element={<Post2 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;