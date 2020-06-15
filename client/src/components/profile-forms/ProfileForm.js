import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import "./style.scss";

const initialState = {
  website: "",
  favgame: "",
  steamusername: "",
  xboxid: "",
  playstationid: "",
  youtube: "",
  twitter: "",
  facebook: "",
  instagram: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };

      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    website,
    favgame,
    steamusername,
    xboxid,
    playstationid,
    youtube,
    twitter,
    facebook,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <div className="container-edit">
        <h1 className="heading text-center">Edit Your Profile</h1>
        <p className="text-center">
          <i className="fas fa-user" /> Add some changes to your profile
        </p>
        <p className="text-center text-light">* = required field</p>
        <div className="details">
          <form onSubmit={onSubmit}>
            <div className="web text-center">
              <input
                type="text"
                placeholder="Website"
                name="website"
                value={website}
                onChange={onChange}
              />
              <p className="form-text text-center text-warning">Website</p>
            </div>
            <div className="game text-center">
              <input
                type="text"
                placeholder="Favorite Game"
                name="favgame"
                value={favgame}
                onChange={onChange}
              />
              <p className="form-text text-center text-warning">
                {" "}
                *Mention your favorite game
              </p>
            </div>
            <div className="steam text-center">
              <input
                type="text"
                placeholder="Steam Username"
                name="steamusername"
                value={steamusername}
                onChange={onChange}
              />
              <p className="form-text text-center text-warning">
                Mention your steam username
              </p>
            </div>
            <div className="xbox text-center">
              <input
                type="text"
                placeholder="XBOX ID"
                name="xboxid"
                value={xboxid}
                onChange={onChange}
              />
              <p className="form-text text-center text-warning">
                Mention your xbox id
              </p>
            </div>
            <div className="ps text-center">
              <input
                type="text"
                placeholder="PlayStation ID"
                name="playstationid"
                value={playstationid}
                onChange={onChange}
              />
              <p className="form-text text-center text-warning">
                Mention your playstation id
              </p>
            </div>
            <input type="submit" className="btn btn-primary" />
            <span> </span>
            <Link className="btn btn-light" to="/dashboard">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);

/*



*/
