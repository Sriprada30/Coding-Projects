function enter()
{
  uname=document.getElementById("user_name").value;
  localStorage.setItem("User name",uname);
  document.getElementById("user_name").value="";
  
  oname=document.getElementById("other_person").value;
  localStorage.setItem("Other name",oname);
  document.getElementById("other_person").value="";

  var getuname=localStorage.getItem("User name");
  document.getElementById("duser_name").innerHTML=getuname;

  var getoname=localStorage.getItem("Other name");
  document.getElementById("dother_person").innerHTML=getoname;
}
function send1()
{
  message1=document.getElementById("input_message1").value;
  localStorage.setItem("message from user_1",message1);
  document.getElementById("input_message1").value= " ";

   var msg_to_be_displayed1 = localStorage.getItem("message from user_1");
  document.getElementById("msg_rightbox").innerHTML=msg_to_be_displayed1 +"<br>"+ "<hr>" + document.getElementById("msg_rightbox").innerHTML;
 
}
function send2()
{
 message1=document.getElementById("input_message2").value;
 localStorage.setItem("message from user_2",message1);
 document.getElementById("input_message2").value="";

 var msg_to_be_displayed2 = localStorage.getItem("message from user_2");

 document.getElementById("msg_leftbox").innerHTML =  msg_to_be_displayed2 + '<br>'+'<hr>' +document.getElementById("msg_leftbox").innerHTML;
 }
