document.getElementById('sendchatpage').onclick = function()
{
  var chat_page = new ChatPage('textarea', "user_chat_error");
  if (chat_page.is_valid())
  {

  }
  else
  {
    return false;
  }
}
