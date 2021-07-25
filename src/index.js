const blend = require("@mapbox/blend");
const { fetchImage } = require("./service/cat-service-request");
const {
  saveProcessedImage,
  getCustomTextsForImages,
  combineImages,
  getBlendingOptions,
  getImageProperties
} = require("./image/image-utils");

const imageRequests = [];
/**
 * Get custom texts to display on top of each cat image
 */
const customCatTextsList = getCustomTextsForImages();

/**
 * Get image property object - contains width height size
 * @type {ImageProperties}
 */
const imageProperties = getImageProperties();

/**
 * Fetch cat images
 */
customCatTextsList.forEach(customText => {
  imageRequests.push(fetchImage(customText, imageProperties));
});

Promise.all(imageRequests)
  .then(data => {
    blend(
      combineImages(data, imageProperties),
      getBlendingOptions(data, imageProperties),
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        saveProcessedImage(data);
      }
    );
  })
  .catch(err => {
    console.log("[index] Unexpected error occurred",err);
  });
