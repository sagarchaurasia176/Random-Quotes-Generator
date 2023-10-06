const userClick = document.querySelector('.btn');
const quotes = document.querySelector('.quotes');
const resultContainer = document.querySelector('.result');
const text = document.querySelector(' #text');
const authorName = document.querySelector('#authorName');
const apiUrl = "https://api.quotable.io/quotes";

var respo2 = null;
var i = 0;
// fetch api 
const randomQuotesGenerator = async() => {
    const dataFetch = await fetch(apiUrl)
    const respo = await dataFetch.json();
    console.log(respo);
    respo2 = respo['results'];
    // create our own container 
    resultContainer.innerHTML = `
        <p id="text">${respo['results'][0]['content']}</p>
        <b id="authorName">${respo['results'][0]['author']}</b>
        `;

    userClick.removeEventListener('click', () => { randomQuotesGenerator() });
    userClick.addEventListener('click', nextquote)

}

// user click
userClick.addEventListener('click', () => {
    randomQuotesGenerator();

})

function nextquote() {
    i++;
    resultContainer.innerHTML = `
        <p id="text">${respo2['results'][i]['content']}</p>
        <b id="authorName">${respo2['results'][i]['author']}</b>
        `;
    if (i == 20) {
        userClick.removeEventListener('click', nextquote);
        userClick.addEventListener('click', () => {
            randomQuotesGenerator();
        })
    }
}