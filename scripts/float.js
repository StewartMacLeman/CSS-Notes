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

// The Float Property Example 1: float: left
changeSampleContent("1", "floatID_", "floatChange_", "floatChangeHelper", "float_Original");

// The Float Property Example 2: float: left
changeSampleContent("2", "floatID_", "floatChange_", "floatChangeHelper", "float_Original");

// The Float Property Example 3: float: right
changeSampleContent("3", "floatID_", "floatChange_", "floatChangeHelper", "float_Original");

// The Float Property Example 4: float: right
changeSampleContent("4", "floatID_", "floatChange_", "floatChangeHelper", "float_Original");

// The Float Property Example 5: float: none (default)
changeSampleContent("5", "floatID_", "floatChange_", "floatChangeHelper", "float_Original");

// The Float Property Example 6: clear
changeSampleContent("6", "floatID_", "floatChange_", "floatChangeHelper_2", "float_Original_2");
