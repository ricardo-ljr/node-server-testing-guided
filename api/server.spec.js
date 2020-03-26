const request = require("supertest");
const server = require("./server");
describe("server.js", function() {
  describe("GET /", function() {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should responde with { api: up }", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.api).toBe("up");
        });
    });
  });
});
// describe("server.js", function() {});
// describe("server.js", function() {});
// describe("server.js", function() {});
// describe("server.js", function() {});
