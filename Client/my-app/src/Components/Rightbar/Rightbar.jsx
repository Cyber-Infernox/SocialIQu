import "./Rightbar.css";

import img from "../../Assets/Home/Navbar/logo.png";

import { UsersData } from "../../dummyData";

import CakeIcon from "@mui/icons-material/Cake";
import Online from "../Online/Online";

const Rightbar = ({ Profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg" />
          <span className="birthdayText">
            <b>Virat Kohli</b> and 3 others have their birthday today
          </span>
        </div>
        <img src={img} alt="" className="rightbarAd" />
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
        <h4 className="rightbarTitle">User Information Title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">New Jersey</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
          <div className="rightbarFollowing">
            <img src={img} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowinName">Tom Cruise</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
