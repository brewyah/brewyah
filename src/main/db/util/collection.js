/**
 * @module brew/db/collection
 * @external MongoDB
 * @see {@link http://mongodb.github.io/node-mongodb-native/2.2/api/index.html|MongoDB}
 */

module.exports = {
    /**
     * Grab a named collection from a {@link external:MongoDB.Db} instance
     *
     */
    async get(db, name) {
        return await db.collection(name);
    }
};
