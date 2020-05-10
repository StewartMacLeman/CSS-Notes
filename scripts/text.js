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
// -----------------------------------------------------------------------------

// Text Example 1: font-size
changeSampleContent("1", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 2: font-weight
changeSampleContent("2", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 3: color
changeSampleContent("3", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 4: text-align
changeSampleContent("4", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 5: text-indent
changeSampleContent("5", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 6: font-family
changeSampleContent("6", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 7: font-style
changeSampleContent("7", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 8: text-transform
changeSampleContent("8", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 9: text-decoration
changeSampleContent("9", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 10: text-shadow
changeSampleContent("10", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 11: text-shadow
changeSampleContent("11", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 12: text-shadow
changeSampleContent("12", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 13: letter-spacing
changeSampleContent("13", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 14: word-spacing
changeSampleContent("14", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 15: word-spacing
changeSampleContent("15", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 16: white-space
changeSampleContent("16", "textID_", "textChange_", "textChangeHelper", "text_Original");

// Text Example 17: overflow
changeSampleContent("17", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");

// Text Example 18: overflow-x
changeSampleContent("18", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");

// Text Example 19: text-justify
changeSampleContent("19", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");

// Text Example 20: word-wrap
changeSampleContent("20", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");

// Text Example 21: writing-mode
changeSampleContent("21", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");

// Text Example 22: writing-mode
changeSampleContent("22", "textID_", "textChange_", "textChangeHelper_2", "text_Original_2");
