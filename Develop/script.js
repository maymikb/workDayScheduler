// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? 

  var buttons = $(".savebtn")
  
  buttons.on ("click", function(event){
    console.dir(event.currentTarget)

    var parentId=event.currentTarget.parentElement.id;
    console.log(parentId)
    
    var textToSave=event.currentTarget.previousElementSibling.value;
    console.log(textToSave)

    localStorage.setItem(parentId, textToSave)
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? FOR LOOP?
  var currentHour = dayjs().hour()
   console.log(currentHour)

   var timeBlocks= $(".time-block");
   
   timeBlocks.each(function(){
  var blockTime = parseInt(this.id.split("-")[1])

  if(blockTime ===currentHour){
    this.classList.add("present")
  }

    if(blockTime < currentHour){
      this.classList.add("past")
    }

      if(blockTime > currentHour){
        this.classList.add("future")
      }
 })
   
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //console.log(buttons)
  
  buttons.each(function(){
    var parentId = this.parentElement.id;
    var savedtext = localStorage.getItem(parentId)
    this.previousElementSibling.value= savedtext
  })

  // TODO: Add code to display the current date in the header of the page.
   var currentDate = dayjs ().format("MMMM DD, YYYY")
  $("#currentDay").text(currentDate)
});
