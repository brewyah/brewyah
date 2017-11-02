/**
 * Namespace for logging helpers
 * @module beer/util/log
 */

/**
 * Log a message and return a value
 * @function logAndReturn
 * @param {String} message - The message to be logged out
 * @param {*} value - The value to be returned after the `message` is logged
 * @returns {*} value
 */
exports.logAndReturn = (message, value) => {
  console.log(message);
  return value;
};

/**
 * Log an error and then reject it
 * @function logAndReject
 * @param {Error} err
 * @returns {Promise<_, Error>}
 */
exports.logAndReject = (err) => {
  // Log out the error
  console.log(err);

  // Reject with the error
  return Promise.reject(err);
};