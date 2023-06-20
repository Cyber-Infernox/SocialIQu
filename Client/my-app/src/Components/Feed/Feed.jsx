import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../Context/AuthContext";
import Posts from "../Posts/Post";
import Share from "../Share/Share";

import "./Feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/api/posts/profile/" + username)
        : await axios.get(`/api/posts/timeline/${user._id}`);

      setPosts(
        response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };

    fetchPosts();
  }, [username, user._id]);

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
