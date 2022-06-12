import app from "./app";
import supertest from "supertest";

describe("test the root path", () => {
  test("It should Response the get method", () => {
    supertest(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual("hello");
      });
  });
});
