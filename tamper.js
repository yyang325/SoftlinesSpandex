// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://tampermonkey.net/scripts.php
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @require http://code.jquery.com/ui/1.12.1/jquery-ui.js
// @require https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/hackathon.js
// @resource styleJQUI http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @resource styleJQ http://jqueryui.com/jquery-wp-content/themes/jqueryui.com/style.css
// @resource dialog https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/dialog.html
// @resource fabricCSS https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/fabric.css
// @grant GM_getResourceText
// @grant GM_addStyle
// ==/UserScript==


(function() {
    var log = function(message) {
        window.console.log(message);
    };

    $("body").append(GM_getResourceText("dialog"));
    GM_addStyle(GM_getResourceText("styleJQUI")); 
    GM_addStyle(GM_getResourceText("styleJQ")); 
    GM_addStyle(GM_getResourceText("fabricCSS"));
    $("#clickToContact_feature_div")[0].innerHTML="<a id='fabricLink' href='javascript:void(0)'>Fabric</a>";

    $( "#dialog" ).dialog({
        autoOpen: false,
        width:750,
        height:250,
        resizable:false
    });

    $( "#durabilityBar" ).progressbar({
        value: 20
    });

    $( "#durabilityBar" ).progressbar({
        value: 50
    });
    $( "#breathabilityBar" ).progressbar({
        value: 80
    });
    $( "#flexabilityBar" ).progressbar({
        value: 100
    });
    $( "#softnessBar" ).progressbar({
        value: 60
    });
    $( "#weightBar" ).progressbar({
        value: 30
    });

    $( "#fabricLink" ).on( "click", function() {
        log("test");
        $( "#dialog" ).dialog( "open" );
    });
}
)();
