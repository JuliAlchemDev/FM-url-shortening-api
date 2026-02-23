import {isValidInput, handleSubmit} from "../handlers";

describe("isValidInput", () => {
    test("returns true when input is valid and not empty", () => {
        const input = {
            checkValidity: () => true, 
            value: "https://example.com"
        }
        expect(isValidInput(input)).toBe(true);
    })
    test("returns false when input is invalid", () => {
        const input = {
            checkValidity: () => false, 
            value: "https://example.com"
        }
        expect(isValidInput(input)).toBe(false);
    })
    test("returns false when input is empty", () => {
        const input = {
            checkValidity: () => true, 
            value: ""
        }
        expect(isValidInput(input)).toBe(false);
    })
})