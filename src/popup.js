var label = null;
var slider = null;
var data = {};

//popup.html　読み込み後の処理
window.onload = function() {
    //要素の取得
    label = document.getElementById('label');
    slider = document.getElementById('slider');

    //保存されていたデータ取得してスライダーに適用させる
    chrome.storage.sync.get('data', function (value) {
        console.log('!');
        Object.assign(data, value.data);
        var height = String(data.height);
        console.log('test' + height) ;
        slider.value = height;
        label.textContent = 'Input area height is ' + height + 'px';
        
    });

    //スライダーに入力があった時の動作
    slider.addEventListener("input", function() {
        //ラベルの変更
        label.textContent = 'Input area height is ' + slider.value + 'px';
        data.height = slider.value;

        //値の格納
        chrome.storage.sync.set({data}, function(){
            console.log("saved");
        });   
        
    });

};
