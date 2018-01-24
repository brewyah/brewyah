// Pull in the main app driver function
const startApp = require("../../src/main/app");

// Pull in supertest
const request = require("supertest");

let server;

describe("routes: beers", () => {
    beforeAll(async () => {
        server = await startApp({
            appPort: 1336,
            db: {
                host: "localhost",
                port: 27017,
                cellar: "d_cellar"
            }
        });
    });

    afterEach(() => {
        server.close();
    });

    test("should respond as expected", async (done) => {
        const response = await request(server).get("/api/beers");
        expect(response.status).toEqual(200);
        done();
    });
});
