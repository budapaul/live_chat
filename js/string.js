String.prototype.capitalize = function()
{
  var new_str = this.trim();
  return new_str.charAt(0).toUpperCase() + new_str.slice(1).toLowerCase();;
}

console.log("   My name is Eric  ".capitalize());

String.prototype.humanize = function()
{
  //this method replace all the caracter with a space after it make trim().
  var new_str = this.replace(/[-_ ]+/g, ' ').trim();
  return new_str.charAt(0).toUpperCase() +
    new_str.slice(1).toLowerCase().replace(/[-_]+/g, ' ')
};

console.log("___---lol----My_name is Eric".humanize())

String.prototype.constantize = function()
{
  return this.replace(/[-_ ]*[a-zA-Z]+[-_ ]*/g, function(match)
  {
    var new_string = match.replace(/[-_ ]/g, '')
    return new_string.charAt(0).toUpperCase() + new_string.slice(1)
  });

}
console.log("-----My name is_Eric-----".constantize())

String.prototype.tableize = function()
{

  var a = this.replace(/[!@#$%^&*()+}{'':>?<}]+/g, '');
  return a.replace(/[-_ ]+/g, '-');

}

console.log("!@#$%^My name is Eric".tableize())

String.prototype.hide_error = function(id, message)
{
  span = document.getElementById(id);
  span.style.display = "none";
}

String.prototype.show_error = function(id, message)
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

String.prototype.is_required = function()
{
  if (this.trim() == "")
  {
    return false;
  }
  else
  {
    return true;
  }

}

String.prototype.is_valid_email = function()
{
  var a = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!this.is_required() || !a.test(this))
  {
    return false;
  }
  else
  {
    return true;
  }

}