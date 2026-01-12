const input = document.getElementById("shorten-input");
const button = document.querySelector(".shortener__form-btn");

async function getData(inputUrl) {
  try {
    const response = await fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(inputUrl)}`,
    });

    const data = await response.json();
    return data.result_url;
  } catch (error) {
    console.error(error);
  }
}

async function handleClick() {
  const isInvalid = !input.checkValidity() || input.value === "";

  if (isInvalid) {
    input.classList.add("invalid");
    return;
  }

  const data = await getData(input.value);
  console.log(data);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick();
});

input.addEventListener("change", (e) => {
  input.classList.remove("invalid");
});
