import Posts from "../Posts/Post";
import Share from "../Share/Share";

import "./Feed.css";

import { PostsData } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {PostsData.map((p) => (
          <Posts key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
