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

// The Position Property Example 1: static
changeSampleContent("1", "positionID_", "positionChange_", "positionChangeHelper", "position_Original");

// The Position Property Example 2: relative
changeSampleContent("2", "positionID_", "positionChange_", "positionChangeHelper", "position_Original");

// The Position Property Example 3: relative
changeSampleContent("3", "positionID_", "positionChange_", "positionChangeHelper", "position_Original");

// The Position Property Example 4: relative
changeSampleContent("4", "positionID_", "positionChange_", "positionChangeHelper", "position_Original");

// The Position Property Example 5: fixed
changeSampleContent("5", "positionID_", "positionChange_", "positionChangeHelper", "position_Original");

// The Position Property Example 6: absolute
changeSampleContent("6", "positionID_", "positionChange_", "positionChangeHelper_2", "position_Original_2");

// The Position Property Example 7: sticky
changeSampleContent("7", "positionID_", "positionChange_", "positionChangeHelper_2", "position_Original_2");

// The Position Property Example 8: sticky
changeSampleContent("8", "positionID_", "positionChange_", "positionChangeHelper_2", "position_Original_2");
