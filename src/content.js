window.onload = function(){
    console.log("test");

    var textarea = document.getElementsByClassName('composer-textarea qa-test-message-composer-textarea ')[0];
    var message_area = document.getElementsByClassName('chat-message-conversation-list-container')[0];
    var document_height = document.documentElement.clientHeight;
    var height = '100px';

    //textarea.style.minHeight = '110px';
    textarea.style.maxHeight = 'unset'; 
    textarea.style.height = height;

    message_area.style.height = 'calc(100vh - 217px - '+height+')';
}


