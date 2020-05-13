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

// The Display Property Example 1: inline
changeSampleContent("1", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");

// The Display Property Example 2: block
changeSampleContent("2", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");

// The Display Property Example 3: none
changeSampleContent("3", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");

// The Display Property Example 4: none
changeSampleContent("4", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");

// The Display Property Example 5: visibility: hidden
changeSampleContent("5", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");

// The Display Property Example 6: visibility: hidden
changeSampleContent("6", "displayID_", "displayChange_", "displayChangeHelper", "display_Original");
