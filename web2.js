
function validateForm() {
    var pass = document.forms["myForm"]["pass"].value;
    if (pass == null || pass == "") {
      	document.getElementById("passError").style.display=""
        return false;
    }
    window.location = "web3.html";
    return false;
}
