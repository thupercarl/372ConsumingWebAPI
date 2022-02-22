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
    document.getElementById("submitButton").style.display="none";
}