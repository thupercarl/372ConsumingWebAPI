//Jake Donaldson
//2-24-22
//filterQuote.js
//This file is designed to interact with the search area

let filter = document.getElementById("find");
console.log("script recognized");
filter.onclick = retrieveQuotes;

/**
 * This function is designed to make a GET request to the API and update the page
 * API key Required
 */
function retrieveQuotes() {
    document.querySelector('#result').innerHTML = "";
    document.getElementById("submitButton").style.display="none";
    let author = document.getElementById('author').value
    author = author.replaceAll(" ", "+");

    fetch("https://favqs.com/api/quotes?filter="+author+"&type=author", {
        method: "get",
        mode: "cors",
        headers: {
            "Authorization": "Bearer fedc95d7467cee8cf5a18044c3272526"
        }
    })
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
        .then(data => {
        console.log(data);

        //check and add author name
        if(data.quotes[0].body !== "No quotes found")
        {
            document.querySelector('#result').innerHTML =
                "<h2 class='text-light'>"+data.quotes[0].author+"</h2>";

            Object.entries(data.quotes).forEach(entry => {
                let key = entry[0];
                let value = entry[1];
                document.querySelector('#result').innerHTML +=
                "<div id='quoteCard'>" +
                    "<p class='text-dark' id='quoteFont'>"+(parseInt(key) + 1)+" : "+value.body+"</p>" +
                "</div>";
            });
        }
        else
        {
            document.querySelector('#result').innerHTML =
                "<h2 class='text-light'>No quotes matching this author.</h2>";
        }
    })
        .catch(error => {
        console.log(error + " | This is the catch loop");
    });
}