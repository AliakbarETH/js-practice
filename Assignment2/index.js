let admin_email = "aliakbar@gmail.com"
let admin_password = "123"
                                                                                                                                      33333333333333333333333
 function login() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
  }
  
  function logout() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("login-screen").style.display = "none";
    window.location.href = "login.html"; // Redirect to the "login.html" page

  }
