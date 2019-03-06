function myFunction() {
  var str ="";
  var obj= document.getElementById("main_container");
  for (var i=0; i<3;i++){
    str+="<div class='row' id='test_row"+i+"'>";
    var str2="";
    for (var j=0; j<3; j++){
      var key ="index"+String(i)+String(j);
      str2 +="<div class='col'id='test_col " +key+"'>";
    var key2="btn"+String(i) +String(j);
      str2+="<button type='button' id='"+key2+"' class='btn btn-secondary' onClick=addValue('"+key + "','" + key2+"')></button>";
      str2 +="</div>";
    }
    str+=str2;
    str+="</div>";
  }
    obj.innerHTML=str;
  }

//figure out button clicked
//make sure it hasnt been clicked
//make button an x or o
//make a counter 
//determine an even or odd click
//display XorO
var beenClicked=[];
var count= 0;
function addValue(b,v){


  var obj= document.getElementById(v);
  var obj2=document.getElementById("Turn");
if ((count%2==0)&&(!beenClicked.includes(b))){
console.log("X");
count++;
beenClicked.push(b);
console.log(count);
console.log(beenClicked);
obj.innerHTML="X";
obj2.innerHTML="Player O turn";
}

else if((count%2-1==0)&&(!beenClicked.includes(b))){
  console.log("O");
  console.log(count);
  console.log(beenClicked);
  count++;
beenClicked.push(b);
obj.innerHTML="O";
obj2.innerHTML="Player X turn";

}

}
function reset(){
  window.location.reload();
}