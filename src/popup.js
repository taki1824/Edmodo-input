var label = null;
var slider = null;
window.onload = function() {
    label = document.getElementById('label');
    slider = document.getElementById('slider');

    slider.addEventListener("input", function() {
        label.textContent = 'Input area height is ' + slider.value + 'px';

        chrome.runtime.sendMessage(slider.value, function(response) {})
    });

};
