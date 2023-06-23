import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../Context/AuthContext";
import Online from "../Online/Online";
import "./Rightbar.css";

import { UsersData } from "../../dummyData";

import CakeIcon from "@mui/icons-material/Cake";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Rightbar = ({ user }) => {
  const { user: currUser, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currUser.following.includes(user?._id)
  );

  let userId;
  if (user) {
    userId = user._id;
  }

  useEffect(() => {
    const getFriends = async () => {
      try {
        // 647b390b2f09580bdd660ed6
        const friendList = await axios.get("/api/users/friends/" + userId);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [userId]);

  const followHandler = async () => {
    try {
      if (followed) {
        // 647ae4d289de95cae9f6d12c
        await axios.put("/api/users/" + userId + "/unfollow", {
          userId: currUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: userId });
      } else {
        await axios.put("/api/users/" + userId + "/follow", {
          userId: currUser._id,
        });
        dispatch({ type: "FOLLOW", payload: userId });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg" />
          <span className="birthdayText">
            <b>Virat Kohli</b> and 3 others have their birthday today
          </span>
        </div>
        <img src={PF + "/Ad/Ad.png"} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {UsersData.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currUser.username && (
          <button className="rightbarFollowButton" onClick={followHandler}>
            {followed ? (
              <div className="rightbarFollowText">Unfollow</div>
            ) : (
              <div className="rightbarFollowText">Follow</div>
            )}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className="rightbarTitle">User Information Title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "None"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link to={`/profile/${friend.username}`}>
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "/Profile/DummyProfilePic.jpg"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowinName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
