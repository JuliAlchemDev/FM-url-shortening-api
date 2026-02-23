import { getData } from "../api.js";
import { jest } from "@jest/globals";

describe("getData", () => {
  test("getData returns shortened URL", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ shorturl: "https://is.gd/abc123" }),
      }),
    );
    const result = await getData("https://example.com");
    expect(result).toBe("https://is.gd/abc123");   
    global.fetch.mockClear();

  });
});
