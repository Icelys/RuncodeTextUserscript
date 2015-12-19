// ==UserScript==
// @name        JS eval Script
// @namespace   icelys.github.io
// @description Run JS code through text!
// @match       https://scratch.mit.edu/*
// @version     1
// @grant       none
// ==/UserScript==

var doConfirm = true; //You can change this if you want

$(document).ready(function(){

  var isMatch = function(div){
	  if(div.innerHTML.search("&lt;&lt;") > -1 && div.innerHTML.search("&gt;&gt;") > -1){
		  return true;
	  } else {
		  return false;
	  }
  }

  var run = function(thing){
  
	  if(isMatch(thing)){
		  var x = thing.innerHTML.split("&lt;&lt;");
		  var y = x[1].split("&gt;&gt;");
		  if(doConfirm){
		    var confirmed = confirm("About to run: " + y[0]);
		  }
		  if(confirmed == true || (doConfirm == false)){
		    eval(y[0]);
		  }
	  }
  }

  var bind = function(obj){
	  obj.onclick=function(){
		  run(obj);
	  }
  }

  var divs = document.getElementsByClassName("content");
  var positive = [];
  setTimeout(doStuff, 2000)

  function doStuff(){
    for(i=0;i<divs.length;i++){
	
	    if(isMatch(divs[i])){
		    positive.push(divs[i]);
	    }
    } 

    for(i=0;i<positive.length;i++){
  	  bind(positive[i]);
    }
  }
})
