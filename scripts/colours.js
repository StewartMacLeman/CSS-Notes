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

// Colours Example 1: Named
changeSampleContent("1", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 2: Opacity
changeSampleContent("2", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 3: Opacity
changeSampleContent("3", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 4: Red - rgb(red, green, blue)
changeSampleContent("4", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 5: Red - rgba(red, green, blue, alpha)
changeSampleContent("5", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 6: Red - rgba(red, green, blue, alpha)
changeSampleContent("6", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 7: Red - hsl(hue, saturation, lightness)
changeSampleContent("7", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 8: Red - hsl(hue, saturation, lightness)
changeSampleContent("8", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 9: Red - hsl(hue, saturation, lightness)
changeSampleContent("9", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 10: Red - hsl(hue, saturation, lightness)
changeSampleContent("10", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 11: Red - hsl(hue, saturation, lightness)
changeSampleContent("11", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 12: Red - hsla(hue, saturation, lightness, alpha)
changeSampleContent("12", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 13: Red - hsla(hue, saturation, lightness, alpha)
changeSampleContent("13", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 14: Red - Hexadecimal (#rrggbb)
changeSampleContent("14", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");

// Colours Example 15: Red - Hexadecimal (#rgb)
changeSampleContent("15", "colourID_", "colourChange_", "colourChangeHelper", "colour_Original");
