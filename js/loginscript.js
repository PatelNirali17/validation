function login() {
    
     usernamevalidation();
     passwordvalidation();
   
}
function usernamevalidation() {
    var username = document.getElementById('username').value;

    if (username == ""){
        document.getElementById('username').style.border= "1px solid red";
        document.getElementById('idspanusername').style.border = "1px solid red"
        document.getElementById('idspanusername').style.backgroundColor = "red"
        document.getElementById('idokusername').style.display = "none"
        document.getElementById('idnotokusername').style.display = "block"
     }
     else{
     document.getElementById('username').style.border = "1px solid green";
     document.getElementById('idspanusername').style.border = "1px solid green"
     document.getElementById('idspanusername').style.backgroundColor = "green"
     document.getElementById('idnotokusername').style.display = "none"
     document.getElementById('idokusername').style.display = "block"
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