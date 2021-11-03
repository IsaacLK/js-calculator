function display(val){
  document.getElementById('textval').value += val;


}
function eva(){

  var x = document.getElementById('textval').value;
  
  var y = eval(x);
  document.getElementById('textval').value = y;
}

function cor(){
  document.getElementById('textval').value = "";






}
