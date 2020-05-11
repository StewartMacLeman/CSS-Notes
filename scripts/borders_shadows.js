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

// Borders & Shadows Example 1: border-width
changeSampleContent("1", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 2: border-style
changeSampleContent("2", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 3: border-color
changeSampleContent("3", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 4: border shorthand
changeSampleContent("4", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 5: border-top
changeSampleContent("5", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 6: border-radius
changeSampleContent("6", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 7: border-radius
changeSampleContent("7", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 8: border-radius
changeSampleContent("8", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 9: border-radius
changeSampleContent("9", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 10: border-top-left-radius
changeSampleContent("10", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 11: border-top-left-radius
changeSampleContent("11", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 12: border-top-right-radius
changeSampleContent("12", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 13: box-shadow
changeSampleContent("13", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 14: box-shadow
changeSampleContent("14", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 15: box-shadow
changeSampleContent("15", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");

// Borders & Shadows Example 16: box-shadow
changeSampleContent("16", "bordersID_", "bordersChange_", "bordersChangeHelper", "borders_Original");
