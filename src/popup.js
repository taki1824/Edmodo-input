var label = null;
var slider = null;

window.onload = function() {
    label = document.getElementById('label');
    slider = document.getElementById('slider');

    slider.addEventListener("input", function() {
        label.textContent = 'Input area height is ' + slider.value + 'px';

        //リファレンス https://kajindowsxp.com/chrome-message/#toc1, https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage, https://developer.chrome.com/docs/extensions/reference/tabs/ 
        //chrome.tabs.query() 関数で現在開いているタブを取得
        var send_data = { type: 'height', data: slider.value };
        chrome.tabs.query({ active: true, currentWindow: true }, aim_message);
        function aim_message(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, send_data, );
        }        
        
    });

};
