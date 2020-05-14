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

// Flexbox Example 1: display: flex;
changeSampleContent("1", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 2: flex-direction
changeSampleContent("2", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 3: flex-direction
changeSampleContent("3", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 4: flex-direction
changeSampleContent("4", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 5: flex-direction
changeSampleContent("5", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 6: flex-wrap
changeSampleContent("6", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 7: flex-wrap
changeSampleContent("7", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 8: justify-content
changeSampleContent("8", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 9: justify-content
changeSampleContent("9", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 10: justify-content
changeSampleContent("10", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 11: justify-content
changeSampleContent("11", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 12: justify-content
changeSampleContent("12", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 13: justify-content
changeSampleContent("13", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 14: justify-content
changeSampleContent("14", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 15: justify-content
changeSampleContent("15", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 16: justify-content
changeSampleContent("16", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 17: justify-content
changeSampleContent("17", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 18: align-items
changeSampleContent("18", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 19: align-items
changeSampleContent("19", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 20: align-items
changeSampleContent("20", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 21: align-items (Helper class has been updated!)
changeSampleContent("21", "flexboxID_", "flexboxChange_", "flexboxChangeHelper_2", "flexbox_Original");

// Flexbox Example 22: align-items
changeSampleContent("22", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 23: align-content
changeSampleContent("23", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 24: align-content
changeSampleContent("24", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 25: align-content
changeSampleContent("25", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 26: align-content
changeSampleContent("26", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 27: align-content
changeSampleContent("27", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 28: align-content (Helper class has been updated!)
changeSampleContent("28", "flexboxID_", "flexboxChange_", "flexboxChangeHelper_2", "flexbox_Original");

// Flexbox Example 29: align-content & justify-content
changeSampleContent("29", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 30: align-content & justify-content
changeSampleContent("30", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 31: align-content & justify-content
changeSampleContent("31", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 32: align-items & justify-content
changeSampleContent("32", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 33: align-items & justify-content
changeSampleContent("33", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");

// Flexbox Example 34: align-items & justify-content
changeSampleContent("34", "flexboxID_", "flexboxChange_", "flexboxChangeHelper", "flexbox_Original");
