import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// [{type: String}] -> 배열안에 문자열을 넣어서... ex) const video = {hashtags: ["h1", "h2", "h3"]} 이렇게 쓰인다!
// schema 는 model 의 생김새, 형태를 뜻한다.
