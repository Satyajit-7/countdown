const counter=document.querySelector('.counter');
const btn=document.querySelector('.buttons');
const sec=document.getElementById('seconds');

var second;
var min;
var hour;
var remsec;
var c;
function submit(){
	display("submit","start");
	second=Number(sec.value);
	sec.style.display="none";
	counting();
}
function display(first, second){
	document.getElementById(first).style.display = "none";
	document.getElementById(second).style.display = "block";
}

function counting(){
	  hour=Math.floor(second/3600);
      min=Math.floor((second%3600)/60);
      remsec=(second%3600)%60;
      if(min<10){
      	min="0"+min;
      }
      
      if(remsec<10){
      	remsec="0"+remsec;
      }
      counter.innerHTML=hour + " : " + min + " : " + remsec; 
      setInterval(count,1000);

  }
  function check(a){
  	c=a.value;
  	if(a.id=="start")
  		display("start","stop");
  	if(a.id=="stop")
  		display("stop","continue");
  	if(a.id=="continue")
  		display("continue","stop");
  }
  function count(){
  	if(second>0){
  		if(c==1){
  			second--;
  	    hour=Math.floor(second/3600);
      min=Math.floor((second%3600)/60);
      remsec=(second%3600)%60;
      if(min<10){
      	min="0"+min;
      }
      
      if(remsec<10){
      	remsec="0"+remsec;
      }
      counter.innerHTML=hour + " : " + min + " : " + remsec; 
  		}
  	}
  	else
  	{
  		counter.innerHTML="DONE";
  		btn.style.display="none";
  		 }
 }