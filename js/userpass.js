document.getElementById("button").onclick = function()
{
  var username_input = document.getElementById('username');
  var username = username_input.value;
  var email_input = document.getElementById('email');
  var email = email_input.value;
  var error = "";
  var validations = new Validations();

  if (validations.is_required(username))
  {
    validations.hide_error("uservalid")
  }
  else
  {
    error = " Username is empty\n";
    validations.show_error("uservalid", error)
  }
  if (validations.is_valid_email(email))
  {
    validations.hide_error("emailvalid")
  }
  else
  {
    error = "The email is invalid";
    validations.show_error("emailvalid", error)
  }
  if (error.trim() != '')
  {
    return false;
  }
}