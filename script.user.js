
// ==UserScript==
// @name        JS eval Script
// @namespace   icelys.github.io
// @description Run JS code through text!
// @match       https://scratch.mit.edu/*
// @version     1
// @grant       none
// ==/UserScript==

/*
The MIT License (MIT)

Copyright (c) 2015 Icely

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var doConfirm = true; //You can change this if you want

$(function() {

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
		  y[0] = y[0].replace("&lt;", "<").replace("&gt;", ">");
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
});
