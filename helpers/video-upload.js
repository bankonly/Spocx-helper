const ffmpeg = require("fluent-ffmpeg");

const PATH = "/root/Spocx/video/video";
const filename = "0ca791e2-5075-4686-b10e-ad6cacdade9b1614519194361.mp4";

ffmpeg().input(`${PATH}/${filename}`).size("426x240").save(`${PATH}/426x240/${filename}`)