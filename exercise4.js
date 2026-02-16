const box = document.querySelector(".box");
box.addEventListener("click", (event) => {
  // BUG: this.classList.add('active') throws an error
  event.currentTarget.classList.add("active");
});

// 7. Add a comment (2–3 sentences) explaining why the arrow function causes this to fail in
// this context.
/* Answer: the this.classList.add('active') would fail
because arrow functions inherit their this from the surrounding lexical scope, 
so in this case this would refer to the global object and not the element we want. 
*/

// Add a second comment explaining what event.currentTarget returns and why it solves
//the problem
/* Answer: event.currentTarget returns the element the event listener is attached to and so it refers to the element we want to do something with. 
Hence, "this" would not work in this scenario and we rely on "event.currentTarget".*/
