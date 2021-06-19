  
function check() {
  var prin= document.myform.principal.value;
  if(prin == 0 || prin < 0) {
    alert("enter a positive number");
    setTimeout((function(){document.myform.principal.value="";document.myform.principal.focus();}),2 );
    return false;
  }
  return true;
};
function compute() {
  var  p = document.getElementById("principal").value;
  var  r= document.getElementById("rate").value;
  var  t= document.getElementById("years").value;
  var interest = (p*r*t)/100;
  var year= new Date().getFullYear() + parseInt(t);
  document.getElementById("result").innerHTML= "If you deposit <span class=highlight>"+p+"</span>,<br>at an interest rate of <span class=highlight> "+r+"%</span>.<br>You will receive an amount of <span class=highlight>"+interest+"</span>,<br>in the year <span class=highlight>"+year+"</span>.<br><br>"; 
}
function updaterate() {
    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}


        
