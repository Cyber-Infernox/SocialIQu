import "./Navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext";
import DummyProfilePic from "../../Assets/Profile/DummyProfilePic.jpg";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <Link to="/">
          <span className="logo">SocialIQu</span>
        </Link>
      </div>

      <div className="navBarCenter">
        <div className="searchbar">
          <ManageSearchIcon />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink uppercase">Homepage</span>
          <span className="navBarLink uppercase">Timeline</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <PersonIcon />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <ChatIcon />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <NotificationsActiveIcon />
            <span className="navBarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={DummyProfilePic || user.profilePicture}
            alt=""
            className="navBarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
