// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://tampermonkey.net/scripts.php
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @require http://code.jquery.com/ui/1.12.1/jquery-ui.js
// @resource styleJQUI http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @resource styleJQ http://jqueryui.com/jquery-wp-content/themes/jqueryui.com/style.css
// @require https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/hackathon.js
// @resource dialog https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/dialog.html
// @resource fabricCSS https://raw.githubusercontent.com/yyang325/SoftlinesSpandex/master/fabric.css
// @grant GM_getResourceText
// @grant GM_addStyle
// ==/UserScript==


(function() {
    var log = function(message) {
        window.console.log(message);
    };

    //var obj = processor.getFinalResult();
    log("sdfasdf");
    log("dsfasdf" + processor.getFinalResult());

    // dummy json
    var obj = JSON.parse('{ "bars": [ { "property": "Breathability", "rating": "Less", "index": 0}, { "property": "Elasticity", "rating": "Regular", "index": 1 }, { "property": "Durability", "rating": "More", "index": 2 } ], "instruction": [ { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-drying-tumble.png", "description": "Tumble Dry Normal" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-washing-30deg-alt.png", "description": "Machine Wash Normal / Cold" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-ironing.png", "description": "Iron Any Temperature" }, { "iconLink": "https://raw.githubusercontent.com/c4leixub/SoftlinesSpandex/master/icon/wh-bleaching-not-allowed.png", "description": "Do Not Bleach" } ], "fabric": [ { "type": "Cotton", "percentage": "98", "description": "Cotton can be ironed at relatively high temperatures" }, { "type": "Spandex", "percentage": "2", "description": "A lightweight synthetic fiber that is used to make stretchable clothing such as sportswear" } ] }');

    obj = processor.getFinalResult();
    log("obj is");
    log(obj);

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
    }

    function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    //return an sorted array of objects
    function sortObject(obj) {
        var value_arr = Object.values(obj).sort().reverse();
        var key_arr = Object.keys(obj);
        console.log('values sorted as:', value_arr);
        var set = new Set();
        var res = [];
        for(var i = 0; i < value_arr.length; i++){
            for(var j = 0; j < key_arr.length; j++){
                var key = key_arr[j];
                var value = value_arr[i];
                if(set.has(key) || obj[key] != value_arr[i]) continue;
                set.add(key);
                var newobj = {};
                newobj[key] = value;
                res.push(newobj);
            }
        }
        console.log(res);
        return res;
    }


    $("body").append(GM_getResourceText("dialog"));
    GM_addStyle(GM_getResourceText("styleJQUI")); 
    GM_addStyle(GM_getResourceText("styleJQ")); 
    GM_addStyle(GM_getResourceText("fabricCSS"));
    // $("#clickToContact_feature_div")[0].innerHTML="<a id='fabricLink' href='javascript:void(0)'>Fabric</a>";

    /* is frabic with number, display */
    var material_list = '';
    sortObject(materials).map((item) => {
        var temp = '';
        var key = Object.keys(item)[0];
        var value = item[key];
        if(value > 0) {
            temp = key + ' ' + value + '%; ';
        } else {
            temp = key + '; ';
        }
        material_list += temp;
    });

    //if frabic with number delete related bullet
    if(isFrabicWithNumber) {
        console.log('removing index', hackathon.index);
        for(var i = 0; i < hackathon.index.length; i++){
            (function(bi){
                $('#feature-bullets li').eq(bi).remove();
            })(i);
        }
    }

    $("#clickToContact_feature_div")[0].innerHTML="<div class='a-section a-spacing-small fitZoneContainer'><label class='aok-inline-block'>Fabric: </label><a id='fabricLink' href='javascript:void(0)' style='margin-left: 4px;'>" + toTitleCase(material_list) + "</a></div>";

    $( "#dialog" ).dialog({
        autoOpen: false,
        width:750,
        height:320,
        resizable:false
    });

    // The bar
    var p = JSON.parse('{ "styles": [ { "paddingLeft": "0%;", "width": "33%;", "ratingPaddingLeft": "12%;" }, { "paddingLeft": "33%;", "width": "50%;", "ratingPaddingLeft": "42%;" }, { "paddingLeft": "66%;", "width": "100%;", "ratingPaddingLeft": "79%;" } ] }');

    var itemId = ["#itemOne", "#itemTwo", "#itemThree"];
    var bars = obj.bars;
    var i;
    for (i = 0; i < bars.length; i++) {
        $(itemId[i]).html(bars[i].property);

        $("#barDiv"+(i+1)).attr("style", "padding-left: " + p.styles[bars[i].index].paddingLeft);
        $("#barDiv"+(i+1)+" .a-meter-bar").attr("style", "width: " + p.styles[bars[i].index].width);

        $("#rate"+(i+1)).html(bars[i].rating);
        $("#rate"+(i+1)).attr("style", "padding-left: " + p.styles[bars[i].index].ratingPaddingLeft);
    }

    // Wash instruction
    var instruction = obj.instruction;
    for (i = 0; i < instruction.length; i++) {
        $("#img"+(i+1)).attr("src",instruction[i].iconLink);
        $("#desc"+(i+1)).html(instruction[i].description);
    }
    while (i < 4) {
        $("#img"+(i+1)).attr("style","visibility: hidden;");
        $("#desc"+(i+1)).attr("style","visibility: hidden;");
        i++;
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
