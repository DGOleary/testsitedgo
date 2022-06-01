function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    if (inputVal.valueOf()=="something funny".valueOf()){
        alert("Nice try");
    // Displaying the value
    }else{
        alert(inputVal);
}
}