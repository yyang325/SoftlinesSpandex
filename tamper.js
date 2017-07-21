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

    // dummy json
    var obj = JSON.parse('{ "bars": [ { "property": "Breathability", "rating": "Less" }, { "property": "Elasticity", "rating": "Regular" }, { "property": "Durability", "rating": "More" } ], "instruction": [ { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-drying-tumble.png", "description": "Tumble Dry Normal" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-washing-30deg-alt.png", "description": "Machine Wash Normal / Cold" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-ironing.png", "description": "Iron Any Temperature" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-bleaching-not-allowed.png", "description": "Do Not Bleach" } ], "fabric": [ { "type": "Cotton", "percentage": "98", "description": "Cotton can be ironed at relatively high temperatures" }, { "type": "Spandex", "percentage": "2", "description": "A lightweight synthetic fiber that is used to make stretchable clothing such as sportswear" } ] }');

    var isFrabicWithNumber = false;
    var materials = hackathon.retrieveAsinMaterialRelatedInfo()['materials'];
    console.log('materials are:', materials);
    if(materials && Object.keys(materials).length > 0){
        Object.keys(materials).map((m) => {
            console.log(m);
            if(materials[m] > 0){
                isFrabicWithNumber = true;
            }
        });
        console.log('isFrabicWithNumber', isFrabicWithNumber);
    }


    $("body").append(GM_getResourceText("dialog"));
    GM_addStyle(GM_getResourceText("styleJQUI")); 
    GM_addStyle(GM_getResourceText("styleJQ")); 
    GM_addStyle(GM_getResourceText("fabricCSS"));
    // $("#clickToContact_feature_div")[0].innerHTML="<a id='fabricLink' href='javascript:void(0)'>Fabric</a>";

    /* is frabic with number, display */
    var material_list = '';
    Object.keys(materials).map((m) => {
        var temp = '';
        if(isFrabicWithNumber){
            temp = m + ' ' + materials[m] + '%;  ';
        } else {
            temp = m + '; ';
        }
        material_list += temp;
    });

    $("#clickToContact_feature_div")[0].innerHTML="<a id='fabricLink' href='javascript:void(0)'>Fabric: " + material_list + "</a>";

    $( "#dialog" ).dialog({
        autoOpen: false,
        width:750,
        height:250,
        resizable:false
    });

    // The bar
    var barId = ["#barOne", "#barTwo", "#barThree"];
    var itemId = ["#itemOne", "#itemTwo", "#itemThree"];
    var bars = obj.bars;
    var i;
    for (i = 0; i < bars.length; i++) {
        // log(bars[i]);
        $(barId[i]).progressbar({
            value: 20
        });
        $(itemId[i]).innerHTML=bars[i].property;
    }

    // Wash instruction
    var instruction = obj.instruction;
    log(i);
    log(instruction);
    for (i = 0; i < instruction.length; i++) {
        $("#img"+(i+1)).attr("src",instruction[i].iconLink);
        //log($("#desc"+(i+1)));
        $("#desc"+(i+1)).html(instruction[i].description);
    }
    
        
    // Fabric
    var instructionDiv = $("#instruction"), fabric = obj.fabric, html='';
    for (i = 0; i < fabric.length; i++) {
        // instructionDiv.append("<div>" + fabric[i].type + " " + fabric[i].percentage + " " + fabric[i].description + "</div>");
        html = '<div class="block"> <div class="fabricType"> <span class="fabricTypeText">' + fabric[i].type + " " + fabric[i].percentage + '%</span> </div> <div class="fabricDesc"> <span class="fabricDescText">' + fabric[i].description + '</span> </div> </div>';
        instructionDiv.append(html);
    }
    
    
    $( "#fabricLink" ).on( "click", function() {
        log("test");
        $( "#dialog" ).dialog( "open" );
    });
}
)(hackathon);
