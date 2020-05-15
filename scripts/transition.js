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

// Transition Example 1: transition: duration
changeSampleContent("1", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 2: transition: duration
changeSampleContent("2", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 3: transition: durations
changeSampleContent("3", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 4: transition: durations
changeSampleContent("4", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 5: transition-timing-function
changeSampleContent("5", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 6: transition-timing-function
changeSampleContent("6", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 7: transition-timing-function
changeSampleContent("7", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 8: transition-timing-function
changeSampleContent("8", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 9: transition-timing-function
changeSampleContent("9", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 10: transition-timing-function
changeSampleContent("10", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 11: transition with transform
changeSampleContent("11", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 12: transition with transform
changeSampleContent("12", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 13: transition with transform
changeSampleContent("13", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");

// Transition Example 14: shorthand (property duration type delay)
changeSampleContent("14", "transitionID_", "transitionChange_", "transitionChangeHelper", "transition_Original");
