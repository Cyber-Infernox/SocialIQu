import { useEffect, useState } from "react";

import axios from "axios";

import Posts from "../Posts/Post";
import Share from "../Share/Share";

import "./Feed.css";

// import { PostsData } from "../../dummyData";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("Feed Rendered");

    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/api/posts/profile/" + username)
        : await axios.get("/api/posts/timeline/647b390b2f09580bdd660ed6");

      // console.log(response);
      setPosts(response.data);
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
