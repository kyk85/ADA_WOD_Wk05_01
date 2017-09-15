var iArray = []
var sum = 0

function euler(x,y,z){
	var x = Number(document.getElementById("userInput1").value)
	var y = Number(document.getElementById("userInput2").value)
	var z = Number(document.getElementById("userInput3").value)
	//Generate array (length=x) of numbers which can be divided by y an z
	for (i=1;i<x;i++){
	if (i%y==0 || i%z==0) {
		iArray.push(i)
		}
	} 
	//console.log(iArray);
	/* Method 1 */
	var a = Number(iArray[0])
	for (i=0;i<iArray.length;i++) {
	if (isNaN(Number(iArray[(i+1)]))==false) {
		var b = Number(iArray[(i+1)])
		var c = a+b
		//console.log(c)
		//console.log(d)
		a = c
		}
	} // return a;
	
	document.getElementById("answer").innerHTML="The sum of all numbers between 1 and " + x + " that can be divided by " + y + " and " + z + " is " + a
	//resets variables for subsquent tries
	a = 0
	iArray = []
	
  
  
  /*Method 2
	var originalLength=iArray.length
	var a = Number(iArray.pop())
	//Array at this point is one less from original to generate 1st number, so only need to run loop one time less than original length
	//Cannot use i<iArray.length as array length will keep getting shorter after each pop()
	for (i=0;i<originalLength-1;i++) {
	//console.log(iArray);
	sum = a + Number(iArray.pop());
	a = sum;
	} return a;*/
}
//console.log(euler(20,3,5));



