
function bindEvents() {
    console.log("bindEvents");

    document.addEventListener("deviceready", onDeviceReady, false);
    document.getElementById("exec").addEventListener("click", onButtonClicked, false);
}

function onDeviceReady() {
    console.log("onDeviceReady");
}

function onButtonClicked() {
    console.log("onButtonClicked");
    var code = Blockly.JavaScript.workspaceToCode(workspacePlayground)
    alert(code);
    eval(code);
}

bindEvents();

// Blocklyの初期化
var workspacePlayground = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    media: 'media/',
    sounds: false,
});

