let joke_button = document.querySelector(".main button");
let joke = document.querySelector('#joke-display');
// joke.innerHTML="hello world";
async function genrateJoke(params) {
    const header ={
        headers:{
            'X-Api=Key':'LWmlLtnkcrKI6BsFlsmLRg==Z9EGXzJ85hY8Q7C0'
        }
    }
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;

    let dadJoke =await fetch(url,header);

    console.log(dadJoke);
    

    // let newJoke = await JSON.parse(dadJoke)

    // joke.innerHTML = newJoke[0].joke;




}

joke_button.addEventListener('click',genrateJoke)