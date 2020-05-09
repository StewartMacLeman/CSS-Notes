"use strict";
// Function for text examples 1 to 16.------------------------------------------

function selectorUpdateNumber(n) {

  document.querySelector(`#change_btn_${n}`).addEventListener( `click`, changeExample);

  function changeExample(){
    let changeSample = document.querySelector(`#selectorSample_${n}`);
    changeSample.setAttribute(`class`, `selectorChange_${n} selectorChangeDiv`);
  }

  document.querySelector(`#reset_btn_${n}`).addEventListener( `click`, resetExample);

  function resetExample(){
    let changeSample = document.querySelector(`#selectorSample_${n}`);
    changeSample.setAttribute(`class`, `sample_Content_Selc`);
  }
}

// Selectors Example 1: Combinators - Descendant (space)
selectorUpdateNumber("1");
