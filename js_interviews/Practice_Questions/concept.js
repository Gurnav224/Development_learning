


{
    var x = 2;
    var y = "2";
    console.log(x ==y)
}


{
    var x = 3;
    var y = "3";
    console.log(x + y)
}

{
	var obj = { name: "Akanksha", surname: "Choudhary" };
	var obj = { name: "Tanvi", surname: "Priya" };
	console.log(obj);
}
{
	const obj = { color: "blue", item: "top" };
	// var obj = { color: "yellow", item: "shirt" };
	console.log(obj);
}


var myData = {
	name: "Parul",
	printName: function(role){
		console.log(this.name, role)
	}
}
myData.printName("PA");


function getFavColor(){
	console.log(favColor2);
  let favColor1 = "red";
  var favColor2 = "Yellow";
}
getFavColor();



function getFavColor(){
	var favColor2 = "Yellow";
  let favColor1 = "red";
}
getFavColor();
console.log(favColor2);
