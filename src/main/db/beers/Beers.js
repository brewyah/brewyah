module.exports = class Beers {
    constructor({ db }) {
      this.db = db;
    }

    async getCollection() {
      return await this.db.collection("beers");
    }

    /**
     * @function create
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

    read() {

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
}
