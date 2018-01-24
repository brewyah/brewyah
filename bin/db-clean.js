const dbConfig = require("../config/db/db");
const { open } = require("../src/main/db/util");

// Database entities
const {
  db: {
    createCollection: createBeersCollection
  }
} = require("../src/main/db/beers");

const drop = async ({ db }) => await db.dropDatabase();

const createCollections = async ({ db }) => {
  await createBeersCollection({ db });
};

const main = async () => {
  try {
    // connect to the database
    const db = await open(dbConfig);

    // drop the entire database
    await drop({ db });

    // create the collections
    await createCollections({ db });

    // close the connection to the database
    await db.close();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
  process.exit(0);
};

main();



