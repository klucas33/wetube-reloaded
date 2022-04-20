import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

// /:id -> 파라미터 (변수)
// 숫자롤 지정하고 싶으면 /:id(\\d+)

export default videoRouter;
