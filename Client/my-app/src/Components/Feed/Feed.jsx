import Posts from "../Posts/Post";
import Share from "../Share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
