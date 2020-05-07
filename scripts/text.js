"use strict";

// Text Example 1: font-size

document.querySelector("#text_btn_1").addEventListener( "click", textExample_1);

function textExample_1(){
  let changeSample = document.querySelector("#textSample_1");
  changeSample.setAttribute("class", "textChange_1");
}

document.querySelector("#reset_btn_1").addEventListener( "click", resetExample_1);

function resetExample_1(){
  let changeSample = document.querySelector("#textSample_1");
  changeSample.setAttribute("class", "sample_Content");
}
// -------------------------------------------------------------------------------
// Text Example 2: font-weight

document.querySelector("#text_btn_2").addEventListener( "click", textExample_2);

function textExample_2(){
  let changeSample = document.querySelector("#textSample_2");
  changeSample.setAttribute("class", "textChange_2");
}

document.querySelector("#reset_btn_2").addEventListener( "click", resetExample_2);

function resetExample_2(){
  let changeSample = document.querySelector("#textSample_2");
  changeSample.setAttribute("class", "sample_Content");
}

// -------------------------------------------------------------------------------
