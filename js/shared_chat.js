function ChatPage(message_elem_id, message_error_id)
{
  this.message_elem = document.getElementById(message_elem_id)
  this.message_value = this.message_elem.value;

  this.is_valid = function()
  {
    if (this.message_value.is_required() && this.message_value.length < 10)
    {
      this.message_value.hide_error(message_error_id);
      return true;
    }
    else
    {
      if (this.message_value.length > 10)
      {
        error = "Text is longer than 10 characters";
        this.message_value.show_error(message_error_id, error);
      }
      else
      {
        error = "Text is empty";
        this.message_value.show_error(message_error_id, error);
      }
      return false;
    }
  }
}