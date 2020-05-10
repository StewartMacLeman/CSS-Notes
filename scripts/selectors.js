"use strict";

function changeSampleContent(n, content_id, cssChangeClass, cssChangeHelper, originalCSS ) {

  document.querySelector(`#change_btn_${n}`).addEventListener( `click`, changeExample);

  function changeExample(){
    let changeSample = document.querySelector(`#${content_id}${n}`);
    changeSample.setAttribute(`class`, `${cssChangeClass}${n } ${cssChangeHelper}`);
  }

  document.querySelector(`#reset_btn_${n}`).addEventListener( `click`, resetExample);

  function resetExample(){
    let changeSample = document.querySelector(`#${content_id}${n}`);
    changeSample.setAttribute(`class`, `${originalCSS}`);
  }
}
// --------------------------------------------------------------------------------

// Selectors Example 1: Combinators - Descendant (space)
changeSampleContent("1", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 2: Combinators - Descendant (space)
changeSampleContent("2", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");
