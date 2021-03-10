// Connect Database
require("../_configs/db");
const fs = require("fs");
const cmd = require("child_process");

const CourseVideoModel = require("spocx-model/models/coursevideo.model");

const ffmpeg = require("fluent-ffmpeg");

const PATH = "/root/Spocx/video/video";
const filename = "0ca791e2-5075-4686-b10e-ad6cacdade9b1614519194361";

const resolutions = ["426x240", "640x360", "854x480", "1280x720", "1920x1080"];

/* Flow
  1. Find Video Course where is_sized_resolution = false
  2. Size resolution
  3. Update is_sized_resolution = true
*/
const onChangeResolution = async () => {
  try {
    const found_video = await CourseVideoModel.find({ $or: [{ is_sized_resolution: false }, { is_sized_resolution: null }] });
    if (found_video.length < 1) {
      throw new Error(`No Data`);
    }
    for (let i = 0; i < found_video.length; i++) {
      const video = found_video[i];
      try {
        for (let resoluIndex = 0; resoluIndex < resolutions.length; resoluIndex++) {
          const element_resolutions = resolutions[resoluIndex];
          const dest = `${PATH}/${element_resolutions}`;
          if (!fs.existsSync(dest)) {
            cmd.exec(`mkdir ${dest}`);
          }

          console.log(element_resolutions);
          console.log(dest);
          console.log(`${PATH}/${video.video_path}`);
          console.log(`${dest}/${video.video_path}`);
          
          // ffmpeg().input(`${PATH}/${video.video_path}`).size(element_resolutions).save(`${dest}/${video.video_path}`);
          cmd.exec(`ffmpeg -i ${PATH}/${video.video_path} -s ${element_resolutions} -c:a copy ${dest}/${video.video_path}`)
        }

        await found_video[i].save();
      } catch (error) {
        console.log(error.message);
      }
    }

    throw new Error(`Success`);
  } catch (error) {
    console.log(error.message);
  }
  process.exit(1);
};

module.exports = { onChangeResolution };
