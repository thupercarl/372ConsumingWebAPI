let formToggle = document.getElementById("formButton");
formToggle.onclick = generateForm;

function generateForm() {
    console.log("inside generateform");
    let target = document.querySelector('#result');
    target.innerHTML = "<label class='text-light'><input type='text' id='authorSubmit' placeholder='Author'></label>";
    target.innerHTML += "<br>";
    target.innerHTML += "<label class='text-light'><textarea id='bodySubmit' placeholder='Quote'></textarea></label>";
    target.innerHTML += "<br>";
    document.getElementById("submitButton").style.display="block";
}

let submit = document.getElementById("submitButton");
submit.onclick = sendData;

function sendData() {
    console.log("Generated Submit Button Works");
    let author = document.getElementById("authorSubmit").value;
    let body = document.getElementById("bodySubmit").value;
    console.log(author+" | "+body);

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
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    })


    document.getElementById("submitButton").style.display="none";
}