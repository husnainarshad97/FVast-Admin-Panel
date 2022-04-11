// import React, { useState, useEffect } from "react";
// import Posts from "./Posts";
// import Postsd from "./Postsdriver";
// import Pagination from "./Pagination";
// import Paginationd from "./paginationd";

// import axios from "axios";
// const Final = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   const [postsd, setPostsd] = useState([]);
//   const [loadingd, setLoadingd] = useState(false);
//   const [currentPaged, setCurrentPaged] = useState(1);
//   const [postsPerPaged] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         "http://localhost:4000/complains/complaindata"
//       );
//       setPosts(res.data);
//       setLoading(false);
//     };

//     const fetchPostsd = async () => {
//       setLoadingd(true);
//       const res = await axios.get(
//         "http://localhost:4000/complainsdriver/complaindata"
//       );
//       setPostsd(res.data);
//       setLoadingd(false);
//     };

//     fetchPosts();
//     fetchPostsd();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const indexOfLastPostd = currentPaged * postsPerPaged;
//   const indexOfFirstPostd = indexOfLastPostd - postsPerPaged;
//   const currentPostsd = postsd.slice(indexOfFirstPostd, indexOfLastPostd);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const paginated = (pageNumberd) => setCurrentPaged(pageNumberd);

//   return (
//     <div>
//       <div className="container mt-5">
//         <Postsd postsd={currentPostsd} loadingd={loadingd} />
//         <Paginationd
//           postsPerPaged={postsPerPaged}
//           totalPostsd={postsd.length}
//           paginated={paginated}
//         />
//       </div>

//       <div className="container mt-5">
//         <Posts posts={currentPosts} loading={loading} />
//         <Pagination
//           postsPerPage={postsPerPage}
//           totalPosts={posts.length}
//           paginate={paginate}
//         />
//       </div>
//     </div>
//   );
// };

// export default Final;
