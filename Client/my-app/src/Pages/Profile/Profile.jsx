import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Profile.css";

import DummyProfilePic from "../../Assets/Profile/DummyProfilePic.jpg";
import DummyCoverPic from "../../Assets/Profile/DummyCoverPic.jpg";

const Profile = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    // console.log("Users Rendered");

    const fetchUser = async () => {
      const response = await axios.get(
        `/api/users?username=${params.username}`
      );

      // console.log(response);
      setUser(response.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div className="profileContainer">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={user.profilePicture || DummyCoverPic}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={user.coverPicture || DummyProfilePic}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">Hello there!!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={params.username} />
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
