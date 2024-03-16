function buttonClicked() {
    var username = document.getElementById("username-textbox").value;
    var password = document.getElementById("password-textbox").value;
    if(username == "hatdog" && password == "gwapo"){
        alert("Proceed to Dashboard!");
        window.location.href = 'ADMIN_DASHBOARD.html';
    }
    else{
        alert("Invalid Credentials! Please try again.");
    }
  }

  document.getElementById("login-button").addEventListener("click", buttonClicked);