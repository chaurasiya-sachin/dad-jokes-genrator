let joke_button = document.querySelector(".main button");
let joke = document.querySelector("#joke-display");

async function genrateJoke() {
  joke.textContent = "";
  joke.style.width = "5%";
  joke.className = "loader";
  const header = {
    headers: {
      "X-Api-Key": "LWmlLtnkcrKI6BsFlsmLRg==Z9EGXzJ85hY8Q7C0",
    },
  };
  const url = `https://api.api-ninjas.com/v1/dadjokes/`;

  

  try {
    let dadJoke = await fetch(url, header);
    let data = await dadJoke.json();
    
    joke.textContent = data[0].joke;
  } catch (error) {
    joke.textContent = `something went wrong 😕!`
    console.log("error occured :", error.message);
  }
  joke.classList.remove("loader");
  joke.style.width = "95%";
}

joke_button.addEventListener("click", genrateJoke);
