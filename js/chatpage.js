$(document).ready(function(){
  $('#sendchatpage').on ('click' ,function(e){
    var chat_page = new ChatPage('textarea', "chat_error");
    if (chat_page.is_valid())
    {
      e.preventDefault();
      add_message_chat('chat_list',chat_page.message_value,"red" )
    }
    
  });

});
