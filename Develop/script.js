$(function () {
  

  var buttons = $(".saveBtn")
   console.log("saveBtns are:",buttons)

  buttons.on ("click", function(event){
    console.dir(event.currentTarget)

    var parentId=event.currentTarget.parentElement.id;
    console.log(parentId)
    
    var textToSave=event.currentTarget.previousElementSibling.value;
    console.log(textToSave)

    localStorage.setItem(parentId, textToSave)
  })

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
   

  
  buttons.each(function(){
    var parentId = this.parentElement.id;
    var savedtext = localStorage.getItem(parentId)
    this.previousElementSibling.value= savedtext
  })

   var currentDate = dayjs ().format("MMMM DD, YYYY")
  $("#currentDay").text(currentDate)
});
