import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./Profile.css";

import DummyProfilePic from "../../Assets/Profile/DummyProfilePic.jpg";
import DummyCoverPic from "../../Assets/Profile/DummyCoverPic.jpg";

const Profile = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="profileContainer">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src={DummyCoverPic} alt="" />
                <img className="profileUserImg" src={DummyProfilePic} alt="" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Sayon Kar</h4>
                <span className="profileInfoDesc">Hello there!!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
