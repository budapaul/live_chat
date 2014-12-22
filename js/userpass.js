document.getElementById("button").onclick = function()
{
  var username_input = document.getElementById('username');
  var username = username_input.value;
  var email_input = document.getElementById('email');
  var email = email_input.value;
  var error = "";
  if (username.is_required())
  {
    username.hide_error("uservalid")
  }
  else
  {
    error = " Username is empty\n";
    username.show_error("uservalid", error)
  }
  if (email.is_valid_email())
  {
    email.hide_error("emailvalid")
  }
  else
  {
    error = "The email is invalid";
    email.show_error("emailvalid", error)
  }
  if (error.trim() != '')
  {
    return false;
  }
}