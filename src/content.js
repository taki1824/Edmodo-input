window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 3000);

    function checkForJS_Finish () {
        if ( document.querySelector (".chat-room-messages")) {
            clearInterval (jsInitChecktimer);
            
            console.log("test");

            var textarea = document.getElementsByClassName('composer-textarea qa-test-message-composer-textarea ')[0];
            var message_area = document.getElementsByClassName('chat-message-conversation-list-container')[0];
            var height = '100px';
            //var document_height = document.documentElement.clientHeight;
        
            chrome.runtime.onMessage.addListener(function (message) {
                height = message + 'px';
                return true;
            });
        
            //textarea.style.minHeight = '110px';
            textarea.style.maxHeight = 'unset'; 
            textarea.style.height = height;
        
            message_area.style.height = 'calc(100vh - 217px - ' + height + ')';
        }
    }
}