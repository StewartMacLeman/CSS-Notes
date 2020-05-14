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

// Transform Example 1: translate(x,y)
changeSampleContent("1", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 2: translate(x,y)
changeSampleContent("2", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 3: translate(x,y)
changeSampleContent("3", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 4: rotate(deg)
changeSampleContent("4", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 5: rotate(deg)
changeSampleContent("5", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 6: rotateX(deg)
changeSampleContent("6", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 7: rotateX(deg)
changeSampleContent("7", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 8: rotateY(deg)
changeSampleContent("8", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 9: rotateY(deg)
changeSampleContent("9", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 10: rotateY(deg)
changeSampleContent("10", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 11: rotateZ(deg)
changeSampleContent("11", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 12: rotateZ(deg)
changeSampleContent("12", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 13: scaleX(n)
changeSampleContent("13", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 14: scaleX(n)
changeSampleContent("14", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 15: scaleY(n)
changeSampleContent("15", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 16: scaleY(n)
changeSampleContent("16", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 17: scale(x,y)
changeSampleContent("17", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 18: scale(x,y)
changeSampleContent("18", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 19: skewX(deg)
changeSampleContent("19", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 20: skewX(deg)
changeSampleContent("20", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 21: skewY(deg)
changeSampleContent("21", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 22: skewY(deg)
changeSampleContent("22", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");

// Transform Example 23: skew(x-deg,y-deg)
changeSampleContent("23", "transformID_", "transformChange_", "transformChangeHelper", "transform_Original");
