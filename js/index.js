import { getData } from "./api.js";
import { toggleNavList, addListHtml, resetCopyButton } from "./ui.js";
import { handleSubmit } from "./handlers.js";

const input = document.getElementById("shorten-input");
const form = document.querySelector(".shortener__form");
const message = document.querySelector(".shortener__message");
const cards = document.querySelector(".cards__ul");
const toggleNavBtn = document.getElementById("toggle-nav-btn");
const navList = document.getElementById("nav-list");

toggleNavBtn.addEventListener("click", () => toggleNavList(navList));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit({
    input,
    message,
    cards,
    getData,
    addListHtml,
  });
});

input.addEventListener("input", (e) => {
  input.classList.remove("invalid");
  message.hidden = true;
});

cards.addEventListener("click", (e) => {
  const isNotCopyButton = !e.target.matches(".cards__copy");

  if (isNotCopyButton) {
    return;
  }

  const card = e.target.closest(".cards__list");
  const shortenedLink = card.querySelector(
    ".cards__shortened-link",
  ).textContent;

  resetCopyButton(cards);

  e.target.textContent = "Copied!";
  e.target.classList.add("active");

  navigator.clipboard.writeText(shortenedLink);
});
