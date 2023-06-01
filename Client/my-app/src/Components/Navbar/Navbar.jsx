import "./Navbar.css";

import img from "../../Assets/Home/Navbar/logo.png";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <span className="logo">SocialIQu</span>
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
        <img src={img} alt="" className="navBarImg" />
      </div>
    </div>
  );
};

export default Navbar;
