/**
 * Interface with the Beers DB Collection
 * @module brew/db/beers/Beers
 */

/**
 * A class to interface with the underlying database beers collection
 * @alias module:brew/db/beers/Beers
 * @external MongoDB
 */
module.exports = class Beers {
    /**
     * @constructs module:brew/db/beers/Beers
     */
    constructor({ db = null }) {
        /**
         * @member {external:MongoDB.Db} Beers#db
         * @default null
         */
        this.db = db;
    }

    /**
     * @function module:brew/db/beers/Beers#getCollection
     * @returns {string}
     */
    async getCollection() {
        return await this.db.collection("beers");
    }

    /**
     * @function module:brew/db/beers/Beers#create
     * @param {Array} beers
     */
    async create(beers) {
        try {
            const collection = await this.getCollection();
            await collection.insertMany(beers);
        } catch (e) {
            console.log();
            return false
        }

        return true;
    }

    async read() {
        try {
            const collection = await this.getCollection();
            return await new Promise((resolve, reject) =>
                collection.find().toArray((err, beers) => err
                    ? reject(err)
                    : resolve(beers)))
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    update() {

    }

    async delete() {
        try {
            const collection = await this.getCollection();
            await collection.drop();
        } catch (e) {
            console.log(e);
            return false;
        }

        return true;
    }
};
