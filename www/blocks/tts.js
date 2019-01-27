Blockly.Blocks['tts'] = {
    init: function () {
        this.appendValueInput("str")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("を話す");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['tts'] = function (block) {
    var value_str = Blockly.JavaScript.valueToCode(block, 'str', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
     var code = 'TTS.speak({text:' + value_str + ', locale: "ja-JP"});\n';
    return code;
};
