var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Shubhamrajesh007@gmail.com" && password == "mustangride"){
alert ("Login successfully");
//window.location = "success.html"; // Redirecting to other page.
return false;
}
  else if( username == "Shubhamrajesh007" && password == "mustangride")
    {
         alert("invalid email");
      return false;
    }
  else if( username == "Shubhamrajesh007@gmail.com" && password == "mustang" )
          {
          alert("invalid password");
            return false;
}
   else if( username == "985788535" && password == "mustangride")
    {
         alert("invalid user number");
      return false;}
else if ( username == "9857885350" && password == "mustangride"){
alert ("Login successfully");
  return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
  alert("Login Failed");
return false;
}
}
}
