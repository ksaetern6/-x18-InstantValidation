function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert(userEntered + " " + passEntered);
}
function validateUsername(){
  //replace the id and the class name
  var userEntered = document.getElementById("user").value;
  if(userEntered.length<6){
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }//if
  else{
    document.getElementById("usernameError").innerHTML="Good username.";
    document.getElementById("usernameGroup").classList.remove("has-error")
    document.getElementById("usernameGroup").classList.add("has-success");
  }//else
}
function validatePassword(){
  //replace the id and the class name
  var passEntered = document.getElementById("pass").value;
  if(passEntered=="password"){
  //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
