import "./Post.css";

import img from "../../Assets/Home/Navbar/logo.png";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={img} alt="" />
            <span className="postUsername">Sayon Kar</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post :)</span>
          <img className="postImg" src={img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorderIcon className="likeIcon" />
            <span className="postLikeCounter">22 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
