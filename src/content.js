window.addEventListener ("load", myMain, false);
var data = {};
var height = '80px';


//保存されていたデータ取得して要素に適用する
function getSyncData(){
    var returnData
    chrome.storage.sync.get('data', function (value) {
        Object.assign(data, value.data);
        returnData = String(data.height) + 'px';
        textarea.style.height = returnData;
        message_area.style.height = 'calc(100vh - 217px - ' + returnData + ')';
    });    
}

//ページ読み込み完了後（JS処理完了後）に変数の定義＆テキストエリアの変更
function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 3000);

    function checkForJS_Finish () {
        if ( document.querySelector (".chat-room-messages")) {
            clearInterval (jsInitChecktimer);
            //変数の宣言
            textarea = document.getElementsByClassName('composer-textarea qa-test-message-composer-textarea ')[0];
            message_area = document.getElementsByClassName('chat-message-conversation-list-container')[0];
            textarea.style.height = height;
            message_area.style.height = 'calc(100vh - 217px - ' + height + ')';
            getSyncData();
            
            //SCCの変更
            textarea.style.maxHeight = 'unset'; 

            //設定の変更時
            chrome.storage.onChanged.addListener((changes, area) => {
                getSyncData()
            });
        }
    }
}



//popupからメッセージを受け取った時の動作
/* 
chrome.runtime.onMessage.addListener((request, sender) => {
    console.log('呼び出されたわ！受信したデータは', request.data);
    height = request.data + 'px';
    
    textarea.style.height = height;
    message_area.style.height = 'calc(100vh - 217px - ' + height + ')';
});
 */