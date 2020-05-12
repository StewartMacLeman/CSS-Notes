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

// Gradients Example 1: linear-gradient() - default
changeSampleContent("1", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 2: linear-gradient() - default
changeSampleContent("2", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 3: linear-gradient(direction, colour-1, colour-2)
changeSampleContent("3", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 4: linear-gradient(direction, colour-1, colour-2)
changeSampleContent("4", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 5: linear-gradient(direction, colour-1, colour-2)
changeSampleContent("5", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 6: linear-gradient(direction, colour-1, colour-2)
changeSampleContent("6", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 7: linear-gradient(angle, colour-1, colour-2)
changeSampleContent("7", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 8: linear-gradient(angle, colour-1, colour-2)
changeSampleContent("8", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 9: linear-gradient(angle, colour-1, colour-2)
changeSampleContent("9", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 10: linear-gradient(angle, colour-1, colour-2)
changeSampleContent("10", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 11: linear-gradient(direction, colour-1, colour-2...)
changeSampleContent("11", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 12: linear-gradient(direction, colour-1, colour-2...)
changeSampleContent("12", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 13: linear-gradient(direction, colour-1, colour-2...)
changeSampleContent("13", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 14: repeating-linear-gradient(direction, colours...)
changeSampleContent("14", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 15: radial-gradient() - default
changeSampleContent("15", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 16: radial-gradient() - default
changeSampleContent("16", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 17: radial-gradient(shape, colour-1, colour-2...)
changeSampleContent("17", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 18: radial-gradient() - default
changeSampleContent("18", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 19: radial-gradient() - default
changeSampleContent("19", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");

// Gradients Example 20: repeating-radial-gradient()
changeSampleContent("20", "gradientsID_", "gradientsChange_", "gradientsChangeHelper", "gradients_Original");
