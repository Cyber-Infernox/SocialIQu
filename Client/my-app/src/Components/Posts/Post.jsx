import "./Post.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

import DummyProfilePic from "../../Assets/Profile/DummyProfilePic.jpg";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import { UsersData } from "../../dummyData";

const Post = ({ post }) => {
  // const user = UsersData.filter((u) => u.id === post.userId);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log("Users Rendered");

    const fetchUser = async () => {
      const response = await axios.get(`/api/users?userId=${post.userId}`);

      // console.log(response);
      setUser(response.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || DummyProfilePic}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
          </div>
          <div className="postTopRight">
            <span className="postDate">{format(post.createdAt)}</span>
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {!isLiked ? (
              <FavoriteBorderIcon onClick={likeHandler} className="likeIcon" />
            ) : (
              <FavoriteIcon onClick={likeHandler} className="likeIcon" />
            )}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
