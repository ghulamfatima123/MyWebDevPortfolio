function validateForm()
{
    var disclaimerMsg = "Error Messages: <ol>";
    var newLine = "\r\n";
    let nameInput = document.querySelector(".inputbox1").value;
    let phnumInput = document.querySelector(".inputbox2").value;
    let emailInput = document.querySelector(".inputbox3").value;
    let personInput = document.querySelector(".inputbox4").value;
    let dateInput = document.querySelector(".inputbox5").value;
    // disclaimerMsg += '<ol>';

    if (nameInput == "")
    {
        disclaimerMsg += "<li>Name field cannot be empty!</li>";
        // disclaimerMsg += '<br>';
    }
    if (phnumInput == "")
    {
        disclaimerMsg += "<li>Phone Number field cannot be empty!</li>";
        // disclaimerMsg += newLine;
    }
    if (emailInput == "")
    {
        disclaimerMsg += "<li>Email field cannot be empty!</li>";
        // disclaimerMsg += newLine;
    }
    if (personInput == "")
    {
        disclaimerMsg += "<li>Persons field cannot be empty!</li>";
        // disclaimerMsg += newLine;
    }
    if (dateInput == "")
    {
        disclaimerMsg += "<li>Date field cannot be empty!</li>";
        // disclaimerMsg += newLine;
    }

    let nameArray = nameInput.split('');
    for( var i = 0; i < nameInput.length; i++)
    { 
        if (nameArray[i] === ' ') 
        {
            nameArray.splice(i, 1); 
        }
    }
    for (let i in nameArray)
    {
        if ((nameArray[i].charCodeAt() < 65 || nameArray[i].charCodeAt() > 90) && (nameArray[i].charCodeAt() < 97 || nameArray[i].charCodeAt() > 122))
        {
            disclaimerMsg += "<li>Name field should only have alphabets!</li>";
            // disclaimerMsg += newLine;
            break;
        }
    }

    let phnumArray = phnumInput.split('');
    for (let i in phnumArray)
    {
        if (phnumArray[i].charCodeAt() < 48 || phnumArray[i].charCodeAt() > 57)
        {
            disclaimerMsg += "<li>Phone number field should only have numbers!</li>";
            // disclaimerMsg += '<br>';
            break;
        }
    }
    disclaimerMsg += '</ol>';

    if (disclaimerMsg.length > 25)
    {
        document.getElementById("disclaimer-box").style.margin = '20px auto';
        document.getElementById("disclaimer-box").style.backgroundColor = '#ffbe33';
        document.getElementById("disclaimer-box").style.padding = '20px';
        document.getElementById("disclaimer-box").style.border = '3px solid black';
        document.getElementById("disclaimer-box").style.color = 'red';
        document.getElementById("disclaimer-box").style.fontSize = 'larger';
        document.getElementById("disclaimer-box").style.fontWeight = '700';
        document.getElementById("disclaimer-box").innerHTML = disclaimerMsg;
    }
    else
    {
        document.getElementById("disclaimer-box").style.display = 'none';
    }
}

document.getElementById('submit_btn').addEventListener('click', ()=>{
    validateForm();
});