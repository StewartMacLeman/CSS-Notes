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

// Selectors Example 1: Combinators - Descendant (space)
changeSampleContent("1", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 2: Combinators - Descendant (space)
changeSampleContent("2", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 3: Combinators - Child (>)
changeSampleContent("3", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 4: Combinators - Adjacent Sibling (+)
changeSampleContent("4", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 5: Combinators - General Sibling (~)
changeSampleContent("5", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 6: Pseudo-classes (:first-child)
changeSampleContent("6", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 7: Pseudo-classes (:last-child)
changeSampleContent("7", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 8: Pseudo-classes (:nth-child(n))
changeSampleContent("8", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 9: Pseudo-elements (::first-letter)
changeSampleContent("9", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 10: Pseudo-elements (::first-line)
changeSampleContent("10", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 11: Pseudo-elements (::before)
changeSampleContent("11", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 12: Pseudo-elements (::after)
changeSampleContent("12", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 13: Attributes [attribute]
changeSampleContent("13", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 14: Attributes [attribute=]
changeSampleContent("14", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 15: Attributes [attribute~="value"]
changeSampleContent("15", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 16: Attributes [attribute^="value"]
changeSampleContent("16", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 17: Attributes [attribute$="value"]
changeSampleContent("17", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");

// Selectors Example 18: Attributes [attribute*="value"]
changeSampleContent("18", "selectorID_", "selectorChange_", "selectorChangeHelper", "selector_Original");
