document.getElementById('sendchatpage').onclick = function()
{
  var chat_page = new ChatPage('textarea', "chat_error");
 
  if (chat_page.is_valid())
  {
  	add_message_chat('chat_list',chat_page.message_values,"red" )
  	return false;
  }
  else
  {
    return false;
  }
}
