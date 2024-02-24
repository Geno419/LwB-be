const express = require("express");
const router = express.Router();
const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  getAllVideos,
  getVideoComments,
  postVideoComments,
  deleteVideoComments,
} = require("../Controllers/video.controller");

router.post("/", addVideo);
router.put("/:id", updateVideo);
router.delete("/:id",deleteVideo);
router.get("/:id", getVideo);
router.get("", getAllVideos);
router.put("/view/:id", addView);
router.get("/comment/:videoId", getVideoComments);
router.post("/comment/:videoId", postVideoComments);
router.delete("/comment/:videoId/:commentId", deleteVideoComments);

module.exports = router;
