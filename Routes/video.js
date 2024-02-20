const express = require('express')
const verifyToken = require ("../verifyToken")
const router = express.Router()
const {addVideo, updateVideo, deleteVideo, getVideo, addView, getAllVideos} = require ("../Controllers/video.controller")



router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/:id", getVideo)
router.get("", getAllVideos)
router.put("/view/:id", addView)



module.exports = router