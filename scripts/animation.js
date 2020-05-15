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

// Animation Example 1: animation-name & animation-duration
changeSampleContent("1", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 2: animation-name & animation-duration
changeSampleContent("2", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 3: animation-name & animation-duration
changeSampleContent("3", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 4: animation-name & animation-duration
changeSampleContent("4", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 5: animation-delay
changeSampleContent("5", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 6: animation-delay & animation-fill-mode
changeSampleContent("6", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 7: animation-iteration-count
changeSampleContent("7", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 8: animation-iteration-count
changeSampleContent("8", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 9: animation-direction
changeSampleContent("9", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");

// Animation Example 10: animation-timing-function
changeSampleContent("10", "animationID_", "animationChange_", "animationChangeHelper", "animation_Original");
