export function isValidInput(input) {
    return input.checkValidity() && input.value !== "";
}

export async function handleSubmit({
    input,
    message, 
    cards,
    getData,
    addListHtml
}) {
  const inputLink = input.value;
  const invalid = !isValidInput(input);

  if (invalid) {
    input.classList.add("invalid");
    message.hidden = false;
    return;
  }

  const shortenedLink = await getData(inputLink);
  addListHtml(cards, inputLink, shortenedLink);
}