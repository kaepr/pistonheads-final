import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    favgame,
    steamusername,
    playstationid,
    xboxid,
  },
}) => {
  return (
    <Fragment>
      <div className="profile-card-container">
        <div className="profile-image-area">
          <img src={avatar} className="profile-card-image" />
          <div className="profile-username-text">{name}</div>
        </div>
        <div className="profile-info-area">
          <p className="p-profile-color">Favorite Game : {favgame}</p>
          <p className="p-profile-color">Steam Username : {steamusername}</p>
          <p className="p-profile-color">PlayStation ID : {playstationid}</p>
          <p className="p-profile-color">Xbox ID : {xboxid}</p>
        </div>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

/*

<div className="bg-secondary">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          This is user's favorite game {favgame}
          This is user's steam profile {steamusername}
          This is user's PSN id : {playstationid}
          This is user's xbox id : {xboxid}
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>


    <p className="p-profile-color">Favorite Game : {favgame}</p>
          <p className="p-profile-color">Steam Username : {steamusername}</p>
          <p className="p-profile-color">PlayStation ID : {playstationid}</p>
          <p className="p-profile-color">Xbox ID : {xboxid}</p>
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>

*/
