const dbConfig = require("../config/db/db");
const { open } = require("../src/main/db/util");

// Database entities
const {
    db: {
        createCollection: createBeersCollection
    }
} = require("../src/main/db/beers");

const main = async () => {
    try {
        // connect to the database
        const db = await open({

        });

        await db.dropDatabase();

        // create the collections
        await createCollections({ db });

        // close the connection to the database
        await db.close();
    } catch (e) {
        console.log(e);
    }
};

main();

const dbConfig = require("../config/db/db");
const { open } = require("../src/main/db/util");

// Database entities
const { Beers } = require("../src/main/db/beers");

const createBeers = async ({ db }) => {
    const beers = new Beers({ db });

    await beers.delete();

    return await beers.create([
        {
            name: "90 Shilling 3"
        },
        {
            name: "Crane Fest Weisse"
        },
        {
            name: "Beer Thirty"
        }
    ])
};

const main = async () => {
    try {
        const db = await open(dbConfig);
        await createBeers({ db });
        await db.close();
    } catch (e) {
        console.log(e);
        process.exit(1);
    }

    process.exit(0);
};

main();

