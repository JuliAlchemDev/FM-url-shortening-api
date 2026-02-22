import { toggleNavList, resetCopyButton, addListHtml } from "../ui.js";

describe("toggleNavList", () => {
  test("should add is-open class if not present", () => {
    const nav = document.createElement("ul");

    toggleNavList(nav);

    expect(nav.classList.contains("is-open")).toBe(true);
  });
  test("should remove is-open class if already present", () => {
    const nav = document.createElement("ul");
    nav.classList.add("is-open");

    toggleNavList(nav);

    expect(nav.classList.contains("is-open")).toBe(false);
  });
});
