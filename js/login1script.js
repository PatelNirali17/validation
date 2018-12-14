function login() {

    var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var pattern = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
    
   
     if (username == "") {
            document.getElementById('userName').style.border = "1px solid red";
            document.getElementById('errorUserName').innerHTML = 'Please provide username!';
     }
      else if(pattern.test(username)) {
          document.getElementById('userName').style.border = "1px solid #aaaaaa";
          document.getElementById('errorUserName').innerHTML = '';
       }
       else{
        document.getElementById('userName').style.border = "1px solid red";
        document.getElementById('errorUserName').innerHTML = 'user name must have 2 no.';
       }
     
     
     if(password.length<8) {
          
           document.getElementById('password').style.border = "1px solid red";
           document.getElementById('errorPassword').innerHTML = 'Password must be at least 8 characters long.';

       }else{
        document.getElementById('password').style.border = "1px solid #aaaaaa";
        document.getElementById('errorPassword').innerHTML = '';
    }

    }