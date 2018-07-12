//run clock function when window loads
window.onload = clock();  

//create function clock that will display time
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = "pm";
	//if minutes is less than 10 add a zero infront
    if (min < 10) {
      min = "0" + min;
    }
	//if hour is less than 12 display the hour minus 12 for standard time
    if (hour > 12) {
      hour = hour - 12;
    }
    //if hour is equal to 0 set it to 12
    if(hour==0){ 
      hour=12;
    }
	
	// if the hours are less than 12 mid will equal am instead of pm
    if(TwentyFourHour < 12) {
       mid = "am";
    }
    
	//grab the id clock and concactinate the hours, minutes and wether if its am or pm
    document.getElementById("clock").innerHTML = hour + ":" + min + " " + mid ;
    setTimeout(clock, 1000);

  }
  
  //ties the button with an event listener that will run function calcTotal
  document.getElementById("button2").addEventListener("click", function calcTotal(){
	//variable that is set to equal to retrieve orderForm  
	var orderForm = document.forms.orderForm;
	
	//variables that grabs the value of selected groceries
	var aIndex = orderForm.elements.apple.selectedIndex;
	var aCost = orderForm.elements.apple.options[aIndex].value;
	
	var bIndex = orderForm.elements.banana.selectedIndex;
	var bCost= orderForm.elements.banana[bIndex].value;
	
	var cIndex = orderForm.elements.cucumber.selectedIndex;
	var cCost = orderForm.elements.cucumber[cIndex].value;
	
	var sIndex = orderForm.elements.strawberry.selectedIndex;
	var sCost = orderForm.elements.strawberry[sIndex].value;
	
	//adds all the selected grocery items and adds 2 for delivery cost
	var totalCost = (parseInt(aCost) + parseInt(bCost) + parseInt(cCost) + parseInt(sCost) + 2);
	
	//concactinate totalCost variable with fixed dollar sign and fixed 00 decimals, then displays it to input with id of totalCost
	document.getElementById("totalCost").value = "$" + totalCost + ".00";
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  