import "./RightSidebar.scss";
import DropDownArrow from "../../assets/icons/arrow_drop_down-24px.svg";
import UserLogo from "../../assets/images/user.png";
import AddFriend from "../../assets/images/addfriend.png";

const RightSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-wrapper">
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">turtleMedic2</p>
            <button className="sidebar__user-btn">PlayPro</button>
          </div>
        </div>
        <div className="sidebar__dropdown">
          <img src={DropDownArrow}></img>
        </div>
      </div>
      <div className="sidebar__title-wrapper">
        <div className="sidebar__title">
          <p>Friends</p>
          <p>(4/11)</p>
        </div>
        <div className="sidebar__title">
          <img className="sidebar__img" src={AddFriend}></img>
        </div>
      </div>
      <div className="sidebar__list-wrapper">
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Username</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
