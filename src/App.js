import React, { useState, useEffect } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

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
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // get current posts
  const indexOflastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Most popular js repositories</h1>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}

export default App;
