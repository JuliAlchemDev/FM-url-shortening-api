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

describe("addListHtml", () => {
  test("should add a new list item with correct content", () => {
    const urlOrigin = "https://example.com";
    const urlShort = "https://is.gd/abc123";

    const container = document.createElement("ul");

    addListHtml(container, urlOrigin, urlShort);

    const listItem = container.querySelector("li");
    expect(listItem).not.toBeNull();

    expect(container.textContent).toContain(urlOrigin);
    expect(container.textContent).toContain(urlShort);

    const btn = container.querySelector(".cards__copy");
    expect(btn).not.toBeNull();
  });

  test("should add new item at the beginning", () => {
    const container = document.createElement("ul");
    container.innerHTML = `<li>Old item</li>`;
    
    addListHtml(container, "https://new.com", "https://is.gd/new");

    const firstLi = container.firstChild;
    expect(firstLi.querySelector(".cards__input-link").textContent).toBe("https://new.com");
  });
});

describe("resetCopyButton", () => {
  test("should reset all copy buttons", () => {
    const container = document.createElement("div");

    container.innerHTML = `
        <button class="cards__copy active">Copied!</button>
        <button class="cards__copy active">Copied!</button>
        `;

    resetCopyButton(container);
    const buttons = container.querySelectorAll(".cards__copy");

    buttons.forEach((btn) => {
      expect(btn.textContent).toBe("Copy");
      expect(btn.classList.contains("active")).toBe(false);
    });
  });
});