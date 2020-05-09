"use strict";
// Function for text examples 1 to 16.------------------------------------------

function textUpdateNumber(n) {

  document.querySelector(`#text_btn_${n}`).addEventListener( `click`, textExample);

  function textExample(){
    let changeSample = document.querySelector(`#textSample_${n}`);
    changeSample.setAttribute(`class`, `textChange_${n}`);
  }

  document.querySelector(`#reset_btn_${n}`).addEventListener( `click`, resetExample);

  function resetExample(){
    let changeSample = document.querySelector(`#textSample_${n}`);
    changeSample.setAttribute(`class`, `sample_Content`);
  }
}
// Function for the text examples 17 and above.---------------------------------

function textUpdateNumber_2(n) {

  document.querySelector(`#text_btn_${n}`).addEventListener( `click`, textExample);

  function textExample(){
    let changeSample = document.querySelector(`#textSample_${n}`);
    changeSample.setAttribute(`class`, `textChange_${n}`);
  }

  document.querySelector(`#reset_btn_${n}`).addEventListener( `click`, resetExample);

  function resetExample(){
    let changeSample = document.querySelector(`#textSample_${n}`);
    changeSample.setAttribute(`class`, `sample_Content_2`);
  }
}
// -----------------------------------------------------------------------------

// Text Example 1: font-size
textUpdateNumber("1");

// Text Example 2: font-weight
textUpdateNumber("2");

// Text Example 3: color
textUpdateNumber("3");

// Text Example 4: text-align
textUpdateNumber("4");

// Text Example 5: text-indent
textUpdateNumber("5");

// Text Example 6: font-family
textUpdateNumber("6");

// Text Example 7: font-style
textUpdateNumber("7");

// Text Example 8: text-transform
textUpdateNumber("8");

// Text Example 9: text-decoration
textUpdateNumber("9");

// Text Example 10: text-shadow
textUpdateNumber("10");

// Text Example 11: text-shadow
textUpdateNumber("11");

// Text Example 12: text-shadow
textUpdateNumber("12");

// Text Example 13: letter-spacing
textUpdateNumber("13");

// Text Example 14: word-spacing
textUpdateNumber("14");

// Text Example 15: word-spacing
textUpdateNumber("15");

// Text Example 16: white-space
textUpdateNumber("16");

// Text Example 17: overflow
textUpdateNumber_2("17");

// Text Example 18: overflow-x
textUpdateNumber_2("18");

// Text Example 19: text-justify
textUpdateNumber_2("19");

// Text Example 20: word-wrap
textUpdateNumber_2("20");

// Text Example 21: writing-mode
textUpdateNumber_2("21");

// Text Example 22: writing-mode
textUpdateNumber_2("22");


// Original repetitive code!----------------------------------------------------

// Text Example 1: font-size

// document.querySelector("#text_btn_1").addEventListener( "click", textExample_1);
//
// function textExample_1(){
//   let changeSample = document.querySelector("#textSample_1");
//   changeSample.setAttribute("class", "textChange_1");
// }
//
// document.querySelector("#reset_btn_1").addEventListener( "click", resetExample_1);
//
// function resetExample_1(){
//   let changeSample = document.querySelector("#textSample_1");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 2: font-weight
//
// document.querySelector("#text_btn_2").addEventListener( "click", textExample_2);
//
// function textExample_2(){
//   let changeSample = document.querySelector("#textSample_2");
//   changeSample.setAttribute("class", "textChange_2");
// }
//
// document.querySelector("#reset_btn_2").addEventListener( "click", resetExample_2);
//
// function resetExample_2(){
//   let changeSample = document.querySelector("#textSample_2");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 3: color
//
// document.querySelector("#text_btn_3").addEventListener( "click", textExample_3);
//
// function textExample_3(){
//   let changeSample = document.querySelector("#textSample_3");
//   changeSample.setAttribute("class", "textChange_3");
// }
//
// document.querySelector("#reset_btn_3").addEventListener( "click", resetExample_3);
//
// function resetExample_3(){
//   let changeSample = document.querySelector("#textSample_3");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 4: text-align
//
// document.querySelector("#text_btn_4").addEventListener( "click", textExample_4);
//
// function textExample_4(){
//   let changeSample = document.querySelector("#textSample_4");
//   changeSample.setAttribute("class", "textChange_4");
// }
//
// document.querySelector("#reset_btn_4").addEventListener( "click", resetExample_4);
//
// function resetExample_4(){
//   let changeSample = document.querySelector("#textSample_4");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 5: text-indent
//
// document.querySelector("#text_btn_5").addEventListener( "click", textExample_5);
//
// function textExample_5(){
//   let changeSample = document.querySelector("#textSample_5");
//   changeSample.setAttribute("class", "textChange_5");
// }
//
// document.querySelector("#reset_btn_5").addEventListener( "click", resetExample_5);
//
// function resetExample_5(){
//   let changeSample = document.querySelector("#textSample_5");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 6: font-family
//
// document.querySelector("#text_btn_6").addEventListener( "click", textExample_6);
//
// function textExample_6(){
//   let changeSample = document.querySelector("#textSample_6");
//   changeSample.setAttribute("class", "textChange_6");
// }
//
// document.querySelector("#reset_btn_6").addEventListener( "click", resetExample_6);
//
// function resetExample_6(){
//   let changeSample = document.querySelector("#textSample_6");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 7: font-style
//
// document.querySelector("#text_btn_7").addEventListener( "click", textExample_7);
//
// function textExample_7(){
//   let changeSample = document.querySelector("#textSample_7");
//   changeSample.setAttribute("class", "textChange_7");
// }
//
// document.querySelector("#reset_btn_7").addEventListener( "click", resetExample_7);
//
// function resetExample_7(){
//   let changeSample = document.querySelector("#textSample_7");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 8: text-transform
//
// document.querySelector("#text_btn_8").addEventListener( "click", textExample_8);
//
// function textExample_8(){
//   let changeSample = document.querySelector("#textSample_8");
//   changeSample.setAttribute("class", "textChange_8");
// }
//
// document.querySelector("#reset_btn_8").addEventListener( "click", resetExample_8);
//
// function resetExample_8(){
//   let changeSample = document.querySelector("#textSample_8");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 9: text-decoration
//
// document.querySelector("#text_btn_9").addEventListener( "click", textExample_9);
//
// function textExample_9(){
//   let changeSample = document.querySelector("#textSample_9");
//   changeSample.setAttribute("class", "textChange_9");
// }
//
// document.querySelector("#reset_btn_9").addEventListener( "click", resetExample_9);
//
// function resetExample_9(){
//   let changeSample = document.querySelector("#textSample_9");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 10: text-shadow
//
// document.querySelector("#text_btn_10").addEventListener( "click", textExample_10);
//
// function textExample_10(){
//   let changeSample = document.querySelector("#textSample_10");
//   changeSample.setAttribute("class", "textChange_10");
// }
//
// document.querySelector("#reset_btn_10").addEventListener( "click", resetExample_10);
//
// function resetExample_10(){
//   let changeSample = document.querySelector("#textSample_10");
//   changeSample.setAttribute("class", "sample_Content");
// }
// // --------------------------------------------------------------------------
//
// // Text Example 11: text-shadow
//
// document.querySelector("#text_btn_11").addEventListener( "click", textExample_11);
//
// function textExample_11(){
//   let changeSample = document.querySelector("#textSample_11");
//   changeSample.setAttribute("class", "textChange_11");
// }
//
// document.querySelector("#reset_btn_11").addEventListener( "click", resetExample_11);
//
// function resetExample_11(){
//   let changeSample = document.querySelector("#textSample_11");
//   changeSample.setAttribute("class", "sample_Content");
// }
// -----------------------------------------------------------------------------

// Text Example 12: text-shadow

// document.querySelector("#text_btn_12").addEventListener( "click", textExample_12);
//
// function textExample_12(){
//   let changeSample = document.querySelector("#textSample_12");
//   changeSample.setAttribute("class", "textChange_12");
// }
//
// document.querySelector("#reset_btn_12").addEventListener( "click", resetExample_12);
//
// function resetExample_12(){
//   let changeSample = document.querySelector("#textSample_12");
//   changeSample.setAttribute("class", "sample_Content");
// }
// ------------------------------------------------------------------------------
