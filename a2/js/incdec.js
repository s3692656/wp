function decreaseValue() {
	var value = document.getElementById("number");
	if(number.value>0){
		number.value--;
		
	}
   
}
    
function increaseValue() {
    var value = parseInt(document.getElementById('number').value,10);
    value=isNaN(value) ? 0 :value;
    value++;
    document.getElementById('number').value=value;
}

function formValidate(){
	var value=document.getElementById("number").value;
	if(value<=0){
		alert("error please enter number greater than 0")
		return false;
		//document.getElementById("errormessage").hidden=true;
		//return true;
		
	}
	else return true;
	
	//document.getElementById("errormessage").hidden=false;
	//return false;
}