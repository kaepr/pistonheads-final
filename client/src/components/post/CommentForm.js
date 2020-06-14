import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <h3 className="h-post-page">You can comment on this page</h3>
      <div className="form-post-page">
        <h4 className="heading-post-page">Post a comment :</h4>
        <form
          action="text"
          className="form__post"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setText("");
          }}
        >
          <textarea
            id="#"
            name="text"
            cols="50"
            rows="3"
            placeholder="Comment it !!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input type="submit" className="btn btn-dark" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);

/*
<div className="form">
      <div className="bg-primary">
        <h3>Leave a Comment</h3>
      </div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment the post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark" value="Submit" />
      </form>
    </div>

*/
