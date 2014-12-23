function Validations()
{

  this.is_required = function(string)
  {
    if (string.trim() == "")
    {
      return false;
    }
    else
    {
      return true;
    }

  }

  this.is_valid_email = function(string)
  {
    var a = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!this.is_required(string) || !a.test(string))
    {
      return false;
    }
    else
    {
      return true;
    }

  }
  this.hide_error = function(id, message)
  {
    span = document.getElementById(id);
    span.style.display = "none";
  }

  this.show_error = function(id, message)
  {
    span = document.getElementById(id);
    if (message.trim() != '')
    {
      span.innerHTML = message;
    }
    span.style.background = "red";
    span.style.display = "block";
    span.style.width = "auto"
    span.style.margin = "20px 0px 0px 0px"
  }
}