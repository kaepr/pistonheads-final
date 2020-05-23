const express = require("express");
const axios = require("axios");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const checkObjectId = require("../../middleware/checkObjectId");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route     GET api/profile/me
// @desc      Get Current Users Profile
// @access    Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/profile
// @desc      Create or Update User Profile
// @access    Private
router.post(
  "/",
  [auth, [check("favgame", "Your favorite game is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      website,
      favgame,
      steamusername,
      xboxid,
      playstationid,
      youtube,
      twitter,
      instagram,
      facebook,
    } = req.body;

    const profileFields = {
      user: req.user.id,
      favgame,
      steamusername,
      xboxid,
      playstationid,
      website: website === "" ? "" : normalize(website, { forceHttps: true }),
    };

    const socialFields = { youtube, twitter, instagram, facebook };

    for (const [key, value] of Object.entries(socialFields)) {
      if (value && value.length > 0)
        socialFields[key] = normalize(value, { forceHttps: true });
    }
    profileFields.social = socialFields;

    try {
      //Using Upsert Option (creates new doc is no match is found):

      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
