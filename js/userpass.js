$(document).ready(function()
{
  $("#button").on('click', function()
  {
    var username_input = $('#username');
    var username = username_input.val();
    var email_input = $('#email');
    var email = email_input.val();
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

  });
});