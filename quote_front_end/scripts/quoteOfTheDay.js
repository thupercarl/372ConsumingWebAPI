    let dailyQuote = document.getElementById("dailyQuote");
    dailyQuote.onclick = getQuote;

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
            document.querySelector('#result').innerHTML = "<h2 class='text-light'>"+data.quote.author+"</h2>";
            document.querySelector('#result').innerHTML += "<p class='text-light' id='quoteFont'>"+data.quote.body+"</p>";
        })
        .catch(error => {
            console.log(error);
        });
}