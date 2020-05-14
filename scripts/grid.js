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

// Grid Example 1: grid-template-columns
changeSampleContent("1", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 2: grid-template-columns
changeSampleContent("2", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 3: grid-template-columns
changeSampleContent("3", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 4: grid-template-columns
changeSampleContent("4", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 5: grid-template-rows
changeSampleContent("5", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 6: grid-template-rows
changeSampleContent("6", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 7: grid-column-gap
changeSampleContent("7", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 8: grid-row-gap
changeSampleContent("8", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 9: grid-gap
changeSampleContent("9", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 10: grid-gap
changeSampleContent("10", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 11: justify-content
changeSampleContent("11", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 12: justify-content
changeSampleContent("12", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 13: justify-content
changeSampleContent("13", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 14: justify-content
changeSampleContent("14", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 15: justify-content
changeSampleContent("15", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 16: justify-content
changeSampleContent("16", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 17: align-content
changeSampleContent("17", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 18: align-content
changeSampleContent("18", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 19: align-content
changeSampleContent("19", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 20: align-content
changeSampleContent("20", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 21: align-content
changeSampleContent("21", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 22: align-content
changeSampleContent("22", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 23: align-content
changeSampleContent("23", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");

// Grid Example 24: align-content
changeSampleContent("24", "gridID_", "gridChange_", "gridChangeHelper", "grid_Original");
