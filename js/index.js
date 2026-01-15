const input = document.getElementById("shorten-input");
const form = document.querySelector(".shortener__form");
const message = document.querySelector(".shortener__message");
const cards = document.querySelector(".cards__ul");

async function getData(inputUrl) {
  try {
    const response = await fetch(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(inputUrl)}`
    );
    const data = await response.json();
    return data.shorturl;
  } catch (error) {
    console.error(error);
  }
}

function addListHtml(inputLink, shortenedLink) {
  const listHtml = `<li class="cards__list">
          <div class="cards__link-wrapper">
            <p class="cards__input-link">${inputLink}</p>

            <hr class="cards__divider" />

            <p class="cards__shortened-link">${shortenedLink}</p>
          </div>

          <button class="cards__copy" type="button">Copy</button>
        </li>`;
  cards.insertAdjacentHTML("afterbegin", listHtml);
}

function resetCopyButton() {
  const buttons = cards.querySelectorAll(".cards__copy");

  buttons.forEach((button) => {
    button.textContent = "Copy";
    button.classList.remove("active");
  });
}

async function handleSubmit() {
  const inputLink = input.value;
  const isInvalid = !input.checkValidity() || inputLink === "";

  if (isInvalid) {
    input.classList.add("invalid");
    message.hidden = false;
    return;
  }

  const shortenedLink = await getData(inputLink);
  addListHtml(inputLink, shortenedLink);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
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
    ".cards__shortened-link"
  ).textContent;
  const button = card.querySelector(".cards__copy");

  resetCopyButton();

  button.textContent = "Copied!";
  button.classList.add("active");
  navigator.clipboard.writeText(shortenedLink);
});
