function ChatPage(message_elem_id, message_error_id)
{
  this.message_elem = document.getElementById(message_elem_id)
  this.message_value = this.message_elem.value;

  this.is_valid =function()
  {
    if (this.is_required(this.message_value) && this.message_value.length < 10)
    {
      this.hide_error(message_error_id);
      return true;
    }
    else
    {
      if (this.message_value.length > 10)
      {
        error = "Text is longer than 10 characters";
        this.show_error(message_error_id, error);
      }
      else
      {
        error = "Text is empty";
        this.show_error(message_error_id, error);
      }
      return false;
    }
  }
}
// inherit from validations
ChatPage.prototype = new Validations();

function add_message_chat(id_list, message, color)
{
  var ul = document.getElementById(id_list);
  var li = document.createElement("li");
  li.innerHTML = message;
  li.style.color = color;
  ul.appendChild(li);
} 