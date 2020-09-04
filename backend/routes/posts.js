const express = require("express");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const UserController = require("../controllers/posts");

const router = express.Router();



router.post("", checkAuth, extractFile, UserController.createPost);

router.put("/:id", checkAuth, extractFile, UserController.updatePost);

router.get("", UserController.getPosts);

router.get("/:id", UserController.getPost);

router.delete("/:id", checkAuth, UserController.deletePost);

module.exports = router;
