1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById only uses for unique HTML ID, getElementsByClassName uses all classes under same class name.
        And querySelector grabs first match it finds and querySelectorAll is a static list of all matching.

2. How do you create and insert a new element into the DOM?
Answer: document.createElement() to make the element, and then use append() or appendChild() to stick it
        inside an existing parent element on the page.
   
3. What is Event Bubbling? And how does it work?
Answer: Event bubbling is when we click an element and that click event travels straight up through all its
        parent elements, triggering their click events too.
   
4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is putting just one event listener on a parent element instead of putting them on
   every single child element. It catches the events as they bubble up, which saves memory and is easier to manage.
   
6. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser's default action (like a link opening a new page or a form refreshing),
        but stopPropagation() stops the event from bubbling up to the parent elements.
