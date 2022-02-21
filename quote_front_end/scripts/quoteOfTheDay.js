    let dailyQuote = document.getElementById("dailyQuote");
    dailyQuote.onclick = getQuote;

function getQuote() {
    fetch("https://favqs.com/api/qotd")
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector('#result').innerHTML = "<h2 class='text-light' id='quoteFont'>"+data.quote.author+"</h2>";
            document.querySelector('#result').innerHTML += "<h6 class='text-light' id='quoteFont'>"+data.quote.body+"</h6>";
        })
        .catch(error => {
            console.log(error);
        });
}