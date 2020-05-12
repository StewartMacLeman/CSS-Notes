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

// Background Images Example 1: url(file-path)
changeSampleContent("1", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 2: background-size
changeSampleContent("2", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 3: background-size
changeSampleContent("3", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 4: background-size
changeSampleContent("4", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 5: background-repeat
changeSampleContent("5", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 6: background-repeat
changeSampleContent("6", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 7: background-repeat
changeSampleContent("7", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 8: background-position
changeSampleContent("8", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 9: background-position
changeSampleContent("9", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 10: multiple images
changeSampleContent("10", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");

// Background Images Example 11: multiple images
changeSampleContent("11", "backgroundID_", "backgroundChange_", "backgroundChangeHelper", "background_Original");
