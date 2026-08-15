
function validate() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('message').value;

    if (name == "" || email == "" || msg == "") {
        alert("Name, email, and message fields cannot be empty");
        return false;
    } else {
        alert("Form submitted successfully");
        return true;
    }
};