function registration() {
    usernamevalidation();
    emailvalidation();
    passwordvalidation();
    phonevalidation();
}

function usernamevalidation() {
    var username = document.getElementById('txtusername').value;

    if (username == ""){
        document.getElementById('txtusername').style.border= "1px solid red";
        document.getElementById('idspanusername').style.border = "1px solid red"
        document.getElementById('idspanusername').style.backgroundColor = "red"
        document.getElementById('idokusername').style.display = "none"
        document.getElementById('idnotokusername').style.display = "block"
     }
     else{
     document.getElementById('txtusername').style.border = "1px solid green";
     document.getElementById('idspanusername').style.border = "1px solid green"
     document.getElementById('idspanusername').style.backgroundColor = "green"
     document.getElementById('idnotokusername').style.display = "none"
     document.getElementById('idokusername').style.display = "block"
 }
}

function emailvalidation() {
    var email = document.getElementById('email').value;

    if (email == ""){
        document.getElementById('email').style.border= "1px solid red";
        document.getElementById('idspanemail').style.border = "1px solid red"
        document.getElementById('idspanemail').style.backgroundColor = "red"
        document.getElementById('idokemail').style.display = "none"
        document.getElementById('idnotokemail').style.display = "block"
     }
     else{
     document.getElementById('email').style.border = "1px solid green";
     document.getElementById('idspanemail').style.border = "1px solid green"
     document.getElementById('idspanemail').style.backgroundColor = "green"
     document.getElementById('idnotokemail').style.display = "none"
     document.getElementById('idokemail').style.display = "block"
 }
}

function passwordvalidation() {
    var password = document.getElementById('password').value;

    if ( password == ""){
        document.getElementById('password').style.border= "1px solid red";
        document.getElementById('idspanpassword').style.border = "1px solid red"
        document.getElementById('idspanpassword').style.backgroundColor = "red"
        document.getElementById('idokpassword').style.display = "none"
        document.getElementById('idnotokpassword').style.display = "block"
     }
     else{
     document.getElementById('password').style.border = "1px solid green";
     document.getElementById('idspanpassword').style.border = "1px solid green"
     document.getElementById('idspanpassword').style.backgroundColor = "green"
     document.getElementById('idnotokpassword').style.display = "none"
     document.getElementById('idokpassword').style.display = "block"
 }
}


function phonevalidation() {
    var phone = document.getElementById('phoneno').value;

    if (phone == ""){
        document.getElementById('phoneno').style.border= "1px solid red";
        document.getElementById('idspanphoneno').style.border = "1px solid red"
        document.getElementById('idspanphoneno').style.backgroundColor = "red"
        document.getElementById('idokphoneno').style.display = "none"
        document.getElementById('idnotokphoneno').style.display = "block"
     }
     else{
     document.getElementById('phoneno').style.border = "1px solid green";
     document.getElementById('idspanphoneno').style.border = "1px solid green"
     document.getElementById('idspanphoneno').style.backgroundColor = "green"
     document.getElementById('idnotokphoneno').style.display = "none"
     document.getElementById('idokphoneno').style.display = "block"
 }
}

