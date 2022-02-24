//Jake Donaldson
//2-24-22
//addQuote.js
//This file is designed to interact with the user submission area

let formToggle = document.getElementById("formButton");
formToggle.onclick = generateForm;

/**
 * This function is designed to update the page and display a form
 */
function generateForm() {
    console.log("inside generateform");
    let target = document.querySelector('#result');
    target.innerHTML =
        "<label class='text-light'><input type='text' id='authorSubmit' placeholder='Author'></label>";
    target.innerHTML +=
        "<br>";
    target.innerHTML +=
        "<label class='text-light'><textarea id='bodySubmit' placeholder='Quote'></textarea></label>";
    target.innerHTML +=
        "<br>";
    document.getElementById("submitButton").style.display="block";
}

let submit = document.getElementById("submitButton");
submit.onclick = sendData;

/**
 * This function makes a POST request to the API and updates the page
 * API key required
 * User token required
 */
function sendData() {
    let author = document.getElementById("authorSubmit").value;
    let body = document.getElementById("bodySubmit").value;

    if(!author.trim() || !body.trim())
    {
        document.querySelector("#result").innerHTML =
            "<p class='bg-danger text-light'>There was a problem sending your request.</p>";
    }
    else
    {
        let submission = '{ "quote": {' +
            '"author": "'+author+'",' +
            '"body": "'+body+'" } }';
        JSON.stringify(submission);
        console.log(submission);

        fetch("https://favqs.com/api/quotes", {
            method: "post",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer fedc95d7467cee8cf5a18044c3272526",
                "User-Token": "m90BS1+bxAnxmZgXp6FfzRBLF1aK0SMW9oTZiM2VjH0Dz4AL7jf4sQD55e8N0Z7ixMroIataeCXcGHhYi626sQ=="
            },
            body: submission,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.log("Error:", error);
                document.querySelector("#result").innerHTML =
                    "<p class='bg-danger text-light'>There was a problem sending your request.</p>";
            })

        document.getElementById("submitButton").style.display="none";
    }

}