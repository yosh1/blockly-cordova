cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-texttospeech.tts",
    "file": "plugins/cordova-plugin-texttospeech/www/tts.js",
    "pluginId": "cordova-plugin-texttospeech",
    "clobbers": [
      "TTS"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-texttospeech": "0.1.1"
};
// BOTTOM OF METADATA
});