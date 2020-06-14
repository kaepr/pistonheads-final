import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import "./style.scss";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <li>
    <div className="community-post">
      <div className="author-avator">
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="author" />
        </Link>
      </div>
      <div className="post-content">
        <h5>
          {name}
          <span>posted</span>
        </h5>
        <div className="post-date">
          Date <Moment format="YYYY/MM/DD">{date}</Moment>
        </div>
        <p>{text}</p>
      </div>
      {showActions && (
        <Fragment>
          <div className="buttons-post-item">
            <div className="btn1-post-item">
              <div className="likes-post-item">
                <button
                  type="button"
                  className="like-post-item"
                  onClick={() => addLike(_id)}
                >
                  <i className="fas fa-thumbs-up"></i>{" "}
                  <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
              </div>
              <div className="dislikes-post-item">
                <button
                  type="button"
                  className="dis-post-item"
                  onClick={() => removeLike(_id)}
                >
                  <i className="fas fa-thumbs-down"></i>
                </button>
              </div>
            </div>
            <div className="discussion-post-item">
              <Link
                to={`/posts/${_id}`}
                type="button"
                className="discuss-post-item"
              >
                Discussion
                {comments.length > 0 && (
                  <span className="comment-count"> {comments.length} </span>
                )}
              </Link>
              <span> </span>
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={() => deletePost(_id)}
                  type="button"
                  className="btn btn-danger"
                >
                  <i className="fas fa-times" />
                </button>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  </li>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);

/*


<div className="bg-white">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="">{text}</p>
      <p className="">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up" />{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} className="btn btn-primary">
            Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>

*/
