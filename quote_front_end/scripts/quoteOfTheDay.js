//Jake Donaldson
//2-24-22
//filterQuote.js
//This file is designed to interact with the quote of the day area

let dailyQuote = document.getElementById("dailyQuote");
dailyQuote.onclick = getQuote;

/**
 * This function is designed to make a GET request to the API and update the page
 * No API key is required
 */
function getQuote() {
    document.getElementById("submitButton").style.display="none";
    fetch("https://favqs.com/api/qotd")
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector('#result').innerHTML =
                "<h2 class='text-light'>"+data.quote.author+"</h2>";
            document.querySelector('#result').innerHTML +=
                "<div id='quoteCard'><p class='text-dark' id='quoteFont'>"+data.quote.body+"</p></div>";
        })
        .catch(error => {
            console.log(error);
        });
}