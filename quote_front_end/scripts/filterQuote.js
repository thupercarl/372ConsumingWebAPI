    let filter = document.getElementById("find");
    console.log("script recognized");
    filter.onclick = retrieveQuotes;

function retrieveQuotes() {
    document.getElementById("submitButton").style.display="none";
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
            document.querySelector('#result').innerHTML = "<h2 class='text-light'>"+data.quotes[0].author+"</h2>";
            Object.entries(data.quotes).forEach(entry => {
                let key = entry[0];
                let value = entry[1];
                //console.log("HERE'S THE ENTRIES   |   "+key, value.body);
                document.querySelector('#result').innerHTML += "<p class='text-light' id='quoteFont'>"+(parseInt(key) + 1)+" : "+value.body+"</p>";
            });
        }
        else
        {
            document.querySelector('#result').innerHTML = "<h2 class='text-light'>No quotes matching this author.</h2>";
        }
    })
        .catch(error => {
        console.log(error + " | This is the catch loop");
    });
}