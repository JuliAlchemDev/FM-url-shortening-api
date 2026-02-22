export function toggleNavList(navList) {
  navList.classList.toggle("is-open");
};

export function addListHtml(container, inputLink, shortenedLink) {
  const listHtml = `<li class="cards__list">
          <div class="cards__link-wrapper">
            <p class="cards__input-link">${inputLink}</p>

            <hr class="cards__divider" />

            <p class="cards__shortened-link">${shortenedLink}</p>
          </div>

          <button class="cards__copy" type="button">Copy</button>
        </li>`;
  container.insertAdjacentHTML("afterbegin", listHtml);
}

export function resetCopyButton(container) {
  const buttons = container.querySelectorAll(".cards__copy");

  buttons.forEach((button) => {
    button.textContent = "Copy";
    button.classList.remove("active");
  });
}
