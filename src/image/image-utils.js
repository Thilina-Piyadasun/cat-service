const { writeFile } = require("fs");
const { join } = require("path");
const ImageProperties = require("./image-properties");
const config = require("../config/config");

const getImageProperties = () => {
  const { width, height, color, size } = config;
  return new ImageProperties(width, height, color, size);
};

const getCustomTextsForImages = () => {
  const { texts } = config;
  return texts;
};

/**
 * Combine images before blend
 * @param data
 * @returns {{x: number, y: number, buffer: Buffer}[]}
 */
const combineImages = (data = [], imageProperties) => {
  return data.map((item, index) => {
    return {
      buffer: new Buffer.from(item, "binary"),
      x: imageProperties.width * index,
      y: 0 // can show any number of images as a grid by changing the y similar to x
    };
  });
};

/**
 * Save the blended image to output directory
 * @param data
 */
const saveProcessedImage = data => {
  const fileOut = join(process.cwd(), `${config.output_dir}/cat-card.jpg`);
  writeFile(fileOut, data, "binary", err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("[saveProcessedImage] The file was saved!");
  });
};

/**
 * Return the properties for generate the combined image
 * This will return the properties to display any number of cat images as a strip eg : |catImg1 | catImg2 | catImg3 | catImg4 |
 * @param data
 * @returns {{width: number, format: string, height: *}}
 */
const getBlendingOptions = (data = [], imageProperties) => {
  const length = data.length; // adjust the width according to the number of images going to blend
  return {
    width: imageProperties.width * length, // will be display any number of cat images as a strip
    height: imageProperties.height, // can display a catImage grid by dynamically changing the height similar way to the width
    format: config.image_format
  };
};

module.exports = {
  saveProcessedImage,
  getCustomTextsForImages,
  combineImages,
  getBlendingOptions,
  getImageProperties
};
