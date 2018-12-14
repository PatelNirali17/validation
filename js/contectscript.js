function contect() {
    
    fnamevalidation();
    lnamevalidation();
    emailvalidation();
    phonevalidation();
    messagevalidation();
  
}
function fnamevalidation() {
   var Fname = document.getElementById('fname').value;

   if (Fname  == ""){
       document.getElementById('fname').style.border= "1px solid red";
       document.getElementById('idspanfname').style.border = "1px solid red"
       document.getElementById('idspanfname').style.backgroundColor = "red"
       document.getElementById('idokfname').style.display = "none"
       document.getElementById('idnotokfname').style.display = "block"
    }
    else{
    document.getElementById('fname').style.border = "1px solid green";
    document.getElementById('idspanfname').style.border = "1px solid green"
    document.getElementById('idspanfname').style.backgroundColor = "green"
    document.getElementById('idnotokfname').style.display = "none"
    document.getElementById('idokfname').style.display = "block"
}
}

function lnamevalidation() {
var Lname = document.getElementById('lname').value;

   if ( Lname == ""){
       document.getElementById('lname').style.border= "1px solid red";
       document.getElementById('idspanlname').style.border = "1px solid red"
       document.getElementById('idspanlname').style.backgroundColor = "red"
       document.getElementById('idoklname').style.display = "none"
       document.getElementById('idnotoklname').style.display = "block"
    }
    else{
       document.getElementById('lname').style.border = "1px solid green";
       document.getElementById('idspanlname').style.border = "1px solid green"
       document.getElementById('idspanlname').style.backgroundColor = "green"
       document.getElementById('idnotoklname').style.display = "none"
       document.getElementById('idoklname').style.display = "block"
}
}

function emailvalidation() {
 var Email = document.getElementById('email').value;
    
    if ( Email == ""){
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

function phonevalidation() {
var Phone = document.getElementById('phoneno').value;
        
    if ( Phone == ""){
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

function  messagevalidation() {
 var Message = document.getElementById('message').value;
            
    if ( Message == ""){
        document.getElementById('message').style.border= "1px solid red";
        document.getElementById('idspanmessage').style.border = "1px solid red"
        document.getElementById('idspanmessage').style.backgroundColor = "red"
        document.getElementById('idokmessage').style.display = "none"
        document.getElementById('idnotokmessage').style.display = "block"
    }
    else{
        document.getElementById('message').style.border = "1px solid green";
        document.getElementById('idspanmessage').style.border = "1px solid green"
        document.getElementById('idspanmessage').style.backgroundColor = "green"
        document.getElementById('idnotokmessage').style.display = "none"
        document.getElementById('idokmessage').style.display = "block"
    }
}