document.getElementById('sendemployeed').onclick = function()
{
  var chat_page = new ChatPage('textarea', "textarea1");
  if (chat_page.is_valid())
  {

  }
  else
  {
    return false;
  }
}