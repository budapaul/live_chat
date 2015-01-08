function ChatPage(message_elem_id, message_error_id)
{
  this.message_elem = $('#' + message_elem_id);
  this.message_value = this.message_elem.val().trim();

  this.is_valid = function()
  {
    if (this.is_required(this.message_value) && this.message_value.length <= 10)
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
      return false;
    }
  }
}
// inherit from validations
ChatPage.prototype = new Validations();

function add_message_chat(id_list, message, color)
{
  var ul = $("#" + id_list);
  var li = $("<li></li>").html(message).css("color", color)
  li.appendTo(ul);

}