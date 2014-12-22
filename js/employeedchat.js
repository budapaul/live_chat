document.getElementById('sendemployeed').onclick = function()
{
  var chat_page = new ChatPage('textarea', "employee_chat_error");
  if (chat_page.is_valid())
  {

  }
  else
  {
    return false;
  }
}
