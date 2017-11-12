const {
    logAndReject
} = require("../util/log");

const message = message => `ModelInterface :: ${message || ""}`;

const METHOD_NOT_IMPLEMENTED = message("Abstract method must be overridden")

class ModelInterface {
    constructor({ db }) {
	this._db = db;
    }

    initCollection() {
	return logAndReject(
	    new Error(METHOD_NOT_IMPLEMENTED)
	);
    }
}
