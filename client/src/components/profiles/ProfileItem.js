import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
