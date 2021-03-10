const { onChangeResolution } = require("../helpers/video-upload");

setTimeout(async () => {
  await onChangeResolution();
}, 500);
