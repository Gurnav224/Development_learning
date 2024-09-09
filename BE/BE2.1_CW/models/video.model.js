
const videoSchema = new mongoose.Schema({
    title: String,
    channelName: String,
    channelLogoUrl: String,
    viewsCount: Number,
    datePosted: Date,
    thumbnailUrl: String,
    duration: String,
  });
  
  const Video = mongoose.model("Video", videoSchema);
  
  module.exports = Video;
  