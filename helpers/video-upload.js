const ffmpeg = require("fluent-ffmpeg");

const PATH = "/root/Spocx/video/video";
const filename = "0ca791e2-5075-4686-b10e-ad6cacdade9b1614519194361";

ffmpeg().input(`${PATH}/${filename}.mp4`).size("426x240").save(`${PATH}/${filename}-426x240.mp4`)