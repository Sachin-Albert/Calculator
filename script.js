function appendtodisplay(value){
    var display = document.getElementById('display')
    display.value+=value
}
function cleardata(){
    var display = document.getElementById('display');
    display.value="";
}
function result(){
    try{
        var display = document.getElementById('display');
    var result = eval(display.value)
    display.value=result
    }
    catch(error){
        var display = document.getElementById('display');
        display.value="ERROR"
    }
}