// Pull in the main app driver function
const server = require("../../src/main/app")({
    appPort: 1336,
    db: {
        host: "localhost",
        port: 27017,
        cellar: "test"
    }
});

// Pull in supertest
const request = require("supertest");

describe("routes: beers", () => {
   afterEach(() => {
       server.close();
   });

   test("should respond as expected", async (done) => {
       const response = await request(server).get("/");
       expect(response.status).toEqual(200);
       done();
   });
});
