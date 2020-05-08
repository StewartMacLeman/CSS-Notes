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

// Text Example 3: color

document.querySelector("#text_btn_3").addEventListener( "click", textExample_3);

function textExample_3(){
  let changeSample = document.querySelector("#textSample_3");
  changeSample.setAttribute("class", "textChange_3");
}

document.querySelector("#reset_btn_3").addEventListener( "click", resetExample_3);

function resetExample_3(){
  let changeSample = document.querySelector("#textSample_3");
  changeSample.setAttribute("class", "sample_Content");
}
// -------------------------------------------------------------------------------

// Text Example 4: text-align

document.querySelector("#text_btn_4").addEventListener( "click", textExample_4);

function textExample_4(){
  let changeSample = document.querySelector("#textSample_4");
  changeSample.setAttribute("class", "textChange_4");
}

document.querySelector("#reset_btn_4").addEventListener( "click", resetExample_4);

function resetExample_4(){
  let changeSample = document.querySelector("#textSample_4");
  changeSample.setAttribute("class", "sample_Content");
}
// -------------------------------------------------------------------------------
