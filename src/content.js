window.addEventListener ("load", myMain, false);

//ページ読み込み完了後（JS処理完了後）に変数の定義＆テキストエリアの変更
function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 3000);

    function checkForJS_Finish () {
        if ( document.querySelector (".chat-room-messages")) {
            clearInterval (jsInitChecktimer);
            //変数の宣言
            textarea = document.getElementsByClassName('composer-textarea qa-test-message-composer-textarea ')[0];
            message_area = document.getElementsByClassName('chat-message-conversation-list-container')[0];
            height = '100px';           
            
            
            textarea.style.maxHeight = 'unset'; 
            textarea.style.height = height;
        
            message_area.style.height = 'calc(100vh - 217px - ' + height + ')';
        }
    }
}

//popupからメッセージを受け取った時の動作
chrome.runtime.onMessage.addListener((request, sender) => {
    console.log('呼び出されたわ！受信したデータは', request.data);
    height = request.data + 'px';
    
    textarea.style.height = height;
    message_area.style.height = 'calc(100vh - 217px - ' + height + ')';
});