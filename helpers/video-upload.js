const ffmpeg = require("fluent-ffmpeg");

ffmpeg().input("../files/exmaple-video.mp4").size("426x240").save("../files/exmaple-video-426x240.mp4")