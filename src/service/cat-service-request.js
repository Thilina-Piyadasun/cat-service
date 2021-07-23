const request = require("postman-request");
const config = require("../config/config");

const createRequest = (imageText = "", args = {}) => {
  return {
    url: config.api + imageText,
    qs: args,
    encoding: "binary"
  };
};

/**
 * Retrive image from api
 * @param imageText
 * @param args
 * @returns {Promise<unknown>}
 */
const fetchImage = (imageText = "", args = {}) => {
  return new Promise((resolve, reject) => {
    const requestData = createRequest(imageText, args);
    request.get(requestData, (err, res, data) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(
        "[fetchImage] Received response with status:" + res.statusCode
      );
      res.statusCode === 200 ? resolve(data) : reject(data);
    });
  });
};

module.exports = { fetchImage };
