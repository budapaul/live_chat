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

