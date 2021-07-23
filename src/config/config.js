const DEFAULT_IMAGE_FORMAT = "jpeg";
const DEFAULT_HEIGHT = 500;
const DEFAULT_WIDTH = 500;
const DEFAULT_COLOR = "Pink";
const DEFAULT_TEXT_SIZE = 100;
const DEFAULT_TEXTS = ["Hello", "You"];
const IMAGE_OUT_DIRECTORY = "./output";

const splitText = text => {
  if (text && text.length > 0) {
    return text.split(",");
  }
  return null;
};

const extractNumericValue = text => {
  if (typeof text != "string") {
    console.log(
      "[extractNumericValue] Config parameter cannot cast to a number"
    );
    return null;
  } else if (!isNaN(text)) {
    return +text;
  } else {
    console.log("[extractNumericValue] Config parameter is not a number");
    return null;
  }
};

const defaultConfig = {
  api: process.env.CATS_AS_A_SERVICE_API,
  output_dir: process.env.OUTPUT_DIR || IMAGE_OUT_DIRECTORY,
  image_format: process.env.IMAGE_FORMAT || DEFAULT_IMAGE_FORMAT,
  height: extractNumericValue(process.env.IMAGE_HEIGHT) || DEFAULT_HEIGHT,
  width: extractNumericValue(process.env.IMAGE_WIDTH) || DEFAULT_WIDTH,
  size: extractNumericValue(process.env.TEXT_SIZE) || DEFAULT_TEXT_SIZE,
  color: process.env.TEXT_COLOR || DEFAULT_COLOR,
  texts: splitText(process.env.TEXTS) || DEFAULT_TEXTS
};

module.exports = defaultConfig;
