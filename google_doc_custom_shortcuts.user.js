// ==UserScript==
// @name         Google docs
// @include      https://*docs.google.*/document/*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @version            0.0.1
// @license MIT
// ==/UserScript==
// ==OpenUserJS==
// @author EnoraNedelec
// ==/OpenUserJS==


// sources:
// for iframe https://stackoverflow.com/a/46217408/3154274
// for switch https://stackoverflow.com/q/13362028/3154274
// combinaison of key  https://stackoverflow.com/a/37559790/3154274
// dispatchEvent https://stackoverflow.com/a/33887557/3154274
// simulate keypress https://stackoverflow.com/a/26863396/3154274    or https://stackoverflow.com/a/5920206/3154274
// js key code http://keycode.info/

// for dispatch :
//    https://jsfiddle.net/6vyL98mz/33/
//    https://jsfiddle.net/ox2La621/1/

// listen for key shorcuts on the text part of google gocs

var editingIFrame = $('iframe.docs-texteventtarget-iframe')[0];
if (editingIFrame) {
    editingIFrame.contentDocument.addEventListener("keydown", dispatchkeyboard, false);
}


// match the key with the action
function dispatchkeyboard(key) {
    // frontcolor
    if (key.altKey  &&  key.code === "KeyW") {// KeyX
        var button = document.getElementById("textColorButton");
        callMouseEvent(button);
        setTimeout(function(){
            var color_choice =  document.getElementById("jfk-palette-cell-50");      //  dark red berry 1    g= jfk-palette-cell-17  = blue
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
        
    }

    if (key.altKey  &&  key.code === "KeyB") {//
        var button = document.getElementById("textColorButton");
        callMouseEvent(button);
        setTimeout(function(){
            var color_choice =  document.getElementById("jfk-palette-cell-0");  //  back
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);

    }

    if (key.altKey  &&  key.code === "KeyR") {
        var button = document.getElementById("textColorButton");
        
        callMouseEvent(button);
        setTimeout(function(){
            var color_choice =  document.getElementById("jfk-palette-cell-11"); //red
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }
    if (key.altKey  &&  key.code === "KeyB") {
        var button = document.getElementById("textColorButton");
        callMouseEvent(button);
        setTimeout(function(){
            var color_choice =  document.getElementById("jfk-palette-cell-17");    // blue     g= jfk-palette-cell-50   brun
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    };

    if (key.altKey  &&  key.code === "KeyV") {
        var button = document.getElementById("textColorButton");
        callMouseEvent(button);
        setTimeout(function(){
             var color_choice =  document.getElementById("jfk-palette-cell-54");   // dark green 1
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }

    // background color
    if (key.altKey  &&  key.code === "KeyY") {
        var buttonbg = document.getElementById("bgColorButton");
        
        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("jfk-palette-cell-103");  //buttonbg.querySelector('[title="yellow"]');
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }

    if (key.altKey  &&  key.code === "KeyG") {
        var buttonbg = document.getElementById("bgColorButton");
        callMouseEvent(buttonbg);
        setTimeout(function(){
            var color_choice = document.getElementById("jfk-palette-cell-96");
            console.log("clickbutton wait 2sec");
            callMouseEvent(color_choice);
        }, 1);
    }

    //zoom   not working
    //if (key.altKey  &&  key.code === "KeyQ") {
    //    var button = document.getElementById("zoomSelect");
    //    callMouseEvent(button);
    //    //window.setTimeout(callKeyEvent(button), 2000);
    //    window.setTimeout(paste(button), 2000);

   //}



}// end of  dispatchkeyboard



//call each mouse event
function callMouseEvent(button){
    triggerMouseEvent (button, "mouseover");
    triggerMouseEvent (button, "mousedown");
    triggerMouseEvent (button, "mouseup");
}

// send mouse even
function triggerMouseEvent (node, eventType) {
    var eventObj        = document.createEvent('MouseEvents');
    eventObj.initEvent (eventType, true, true);
    node.dispatchEvent   (eventObj);
}



///  **********************  some test to send a text to zoom select but could make it works: was able to send a "paste command" but not to modify clipboard content
//function callKeyEvent(button){
//
//        keyEvent(button, "keydown", 97);
//       keyEvent(button, "keypress", 97);
//       keyEvent(button, "keyup", 97);
//
//}

// send keyboard event
//function keyEvent(node, eventType, keypress) {
//    console.log(eventType);
    //event.initKeyEvent (type, bubbles, cancelable, viewArg,
     //               ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
     //               keyCodeArg, charCodeArg)


//  // ****with KeyboardEvent
//  var eventObj = document.createEvent("KeyboardEvent");
// eventObj.initEvent(eventType, true, true, window,
//                0, 0, 0, 0,
//                0, 40);
// document.activeElement.dispatchEvent(eventObj);
//console.log(document.activeElement);





////**** with event (without s
//var eventObj = document.createEvent('Event');
//    eventObj.initEvent(eventType, true, true);
//    eventObj.keyCode = 76;
//     document.activeElement.dispatchEvent(eventObj);


////**** with event Events   // eventObj.initKeyEvent  and  eventObj.initKeyboardEvent  are "not a function"
//    var eventObj = document.createEvent("Events");
//     (eventObj.initKeyEvent || eventObj.initKeyboardEvent)(eventType, true, true);
//
//     // Edit this to fit
//     eventObj.keyCode = 83;
//     eventObj.which = 83;
//     eventObj.ctrlKey = false;
//     eventObj.shiftKey = false;
//     eventObj.altKey = false;
//
//     document.activeElement.dispatchEvent(eventObj);


//***
//    document.activeElement.dispatchEvent(new KeyboardEvent(eventType, {keyCode: 50}));

//***    TypeError: document.activeElement.dispatchKeyEvent is not a function
//    document.activeElement.dispatchKeyEvent("1"); // '\r'
//    document.activeElement.dispatchKeyEvent('\r');

//**********
//   var keyEvent = new KeyboardEvent("keydown", {key : "a", char : "a"});
//    document.activeElement.dispatchEvent(keyEvent);

//}

//function paste(node){
//     // node.select();
//    var successful = document.execCommand('paste');
//
//}


