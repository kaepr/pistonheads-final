import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import "./style.scss";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <h3 className="h-post-page">Welcome to the Community!!</h3>
      <div className="form-post-page">
        <h4 className="heading-post-page">Post an Update :</h4>
        <form
          action="text"
          className="form__post"
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            setText("");
          }}
        >
          <textarea
            id="#"
            name="text"
            cols="50"
            rows="3"
            placeholder="Create a Post"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input type="submit" className="btn-post-page" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);

/*

<div className="form">
      <div className="bg-primary">
        <h3>Say Something...</h3>
      </div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>

*/
