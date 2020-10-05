import React, { useState, useEffect } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";
import ErrorMessage from "./components/errorMessage";
import { Loader } from ".//components/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  // const [postsPerPage] = useState(20);
  const postsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
        );
        const data = await res.json();
        setPosts(data.items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // get current posts
  const indexOflastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);

  const onPageClick = (pageNumber) => setCurrentPage(pageNumber);

  return !loading ? (
    <div className="App">
      <h1>Most popular js repositories</h1>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        onPageClick={onPageClick}
      />
      <Posts posts={currentPosts} loading={loading} />
      {error && <ErrorMessage message={error} />}
    </div>
  ) : (
    <Loader />
  );
}

export default App;
