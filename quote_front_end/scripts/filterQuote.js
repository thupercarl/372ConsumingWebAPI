    let filter = document.getElementById("find");
    console.log("script recognized");
    filter.onclick = retrieveQuotes;

function retrieveQuotes() {
    console.log("we in");
    let author = document.getElementById('author').value
    author = author.replaceAll(" ", "+");
    console.log(author);//TEST
    fetch("https://favqs.com/api/quotes?filter="+author+"&type=author", {
        method: "get",
        mode: "cors",
        headers: {
            "Authorization": "Bearer fedc95d7467cee8cf5a18044c3272526"
        }
    })
    .then(response => {
        /*
        if(!response.ok) {
            throw Error("ERROR");
        }
         */
        return response.json();
    })
        .then(data => {
        console.log(data);
        //document.querySelector('#result').innerHTML = "<h2 class='text-light' id='quoteFont'>"+data[0].quote.author+"</h2>";
        //document.querySelector('#result').innerHTML += "<h6 class='text-light' id='quoteFont'>"+data[0].quote.body+"</h6>";
    })
        .catch(error => {
        console.log(error + " | This is the catch loop");
    });
}