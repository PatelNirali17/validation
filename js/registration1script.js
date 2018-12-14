function registration() {
    usernamevalidation();
    emailvalidation();
    passwordvalidation();
    phonevalidation();

}

function usernamevalidation() {
    var username = document.getElementById('userName').value;

    if (username == "") {
        document.getElementById('userName').style.border = "1px solid red";
        document.getElementById('errorUserName').innerHTML = 'Please provide username!';
      }
   else{
       if(!isNaN(username)){
        document.getElementById('userName').style.border = "1px solid red";
        document.getElementById('errorUserName').innerHTML = 'user name must be char';
       }else{
           if(username.length<=2 || username.length>12) {
            document.getElementById('userName').style.border = "1px solid red";
            document.getElementById('errorUserName').innerHTML = 'user name must be 3 ans 12.';
           }else{
            document.getElementById('userName').style.border = "1px solid #aaaaaa";
            document.getElementById('errorUserName').innerHTML = '';
           }
        }
      }
}

function emailvalidation() {
    var email = document.getElementById('email').value;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(email == "") {
          
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('erroremail').innerHTML = 'Please provide email!';

    } else if(pattern.test(email)){
     document.getElementById('email').style.border = "1px solid #aaaaaa";
     document.getElementById('erroremail').innerHTML = '';
    }
    else{
     document.getElementById('email').style.border = "1px solid red";
     document.getElementById('erroremail').innerHTML = 'Invalid email';
 }
}

function passwordvalidation() {
    var password = document.getElementById('password').value;

    if(password.length<=2 || password.length>10) {
          
        document.getElementById('password').style.border = "1px solid red";
        document.getElementById('errorPassword').innerHTML = 'Password must be 3 ans 10.';

    }else{
     document.getElementById('password').style.border = "1px solid #aaaaaa";
     document.getElementById('errorPassword').innerHTML = '';
    }
  
}

function phonevalidation() {
    var phoneno = document.getElementById('phoneno').value;

    if(phoneno == "") {
          
        document.getElementById('phoneno').style.border = "1px solid red";
        document.getElementById('errorPhone').innerHTML = 'Please provide phone no!';

    }else{
     document.getElementById('phoneno').style.border = "1px solid #aaaaaa";
     document.getElementById('errorPhone').innerHTML = '';
 }
}
