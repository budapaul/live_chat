document.getElementById("button").onclick = function () 
{
  var username_input = document.getElementById('username');
  var username = username_input.value;
  var error = "";
  var illegalChars = /\W/;

  if (username.trim() == "") {
    username_input.style.background = 'Yellow'; 
    error = " Username is empty\n";
} else if ((username.length < 5) || (username.length > 15)) {
    username_input.style.background = 'Red'; 
    error = "Lenght is short or long\n";
} else if (illegalChars.test(username)) {
    username_input.style.background = 'Green'; 
    error = "The caracter is invalid\n";
} else {
    username_input.style.background = 'White';
}
  var email_input=document.getElementById('email');   
  var a=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var email=email_input.value;
  if(!a.test(email))
  {
    email_input.style.background = 'red'; 
    error = "The email is invalid";
   }
   if(error!='')
   {
     alert(error)
   }
   else
   {
    show_info("uservalid");
    show_info("emailvalid");
    }
   return false;
}


function show_info(id)
{
    span =document.getElementById(id);
    span.style.background ="green";
    span.style.display= "inline";
}
