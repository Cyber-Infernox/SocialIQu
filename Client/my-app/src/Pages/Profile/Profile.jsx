import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `/api/users?username=${params.username}`
      );

      setUser(response.data);
    };

    fetchUser();
  }, [params.username]);

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
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "/Profile/DummyCoverPic.jpg"
                  }
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "/Profile/DummyProfilePic.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
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
