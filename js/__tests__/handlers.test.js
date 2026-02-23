import { isValidInput, handleSubmit } from "../handlers";
import { jest } from "@jest/globals";

describe("isValidInput", () => {
  test("returns true when input is valid and not empty", () => {
    const input = {
      checkValidity: () => true,
      value: "https://example.com",
    };
    expect(isValidInput(input)).toBe(true);
  });
  test("returns false when input is invalid", () => {
    const input = {
      checkValidity: () => false,
      value: "https://example.com",
    };
    expect(isValidInput(input)).toBe(false);
  });
  test("returns false when input is empty", () => {
    const input = {
      checkValidity: () => true,
      value: "",
    };
    expect(isValidInput(input)).toBe(false);
  });
});

describe("handleSubmit", () => {
  test("should show error message if input is invalid", () => {
    const input = document.createElement("input");
    input.value = "";
    input.checkValidity = () => false;

    const message = { hidden: true };
    const cards = document.createElement("div");
    const getData = jest.fn();
    const addListHtml = jest.fn();

    handleSubmit({
      input,
      message,
      cards,
      getData,
      addListHtml,
    });

    expect(input.classList.contains("invalid")).toBe(true);
    expect(message.hidden).toBe(false);
    expect(getData).not.toHaveBeenCalled();
    expect(addListHtml).not.toHaveBeenCalled();
  });

  test("should call getData and addList if input is valid", async () => {
    const input = document.createElement("input");
    input.value = "https://example.com";
    input.checkValidity = () => true;

    const message = { hidden: true };
    const cards = document.createElement("div");

    const getData = jest.fn().mockResolvedValue("https://is.gd/acb123");
    const addListHtml = jest.fn();

    await handleSubmit({
      input,
      message,
      cards,
      getData,
      addListHtml,
    });

    expect(input.classList.contains("invalid")).toBe(false);
    expect(message.hidden).toBe(true);
    expect(getData).toHaveBeenCalledWith(input.value);
    expect(addListHtml).toHaveBeenCalledWith(
      cards,
      input.value,
      "https://is.gd/acb123"
    );
  });
});
