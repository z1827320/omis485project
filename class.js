var trans_html="";
var other_html="";
var supply_html="";
var data_html="";
var info_html="";



function UpdateData(id) {
	document.getElementById("supply_classes").innerHTML='';
	document.getElementById("information_classes").innerHTML='';
	

 if(document.getElementById("data_" + id)) {
 	document.getElementById(id).style.background='white';
	document.getElementById(id).style.color='black';
 	var elem = document.getElementById("data_" + id);
    elem.parentNode.removeChild(elem);
} else {
	data_html=document.getElementById("data_classes").innerHTML;
	document.getElementById(id).style.background='green';
	document.getElementById(id).style.color='white';
	document.getElementById("data_classes").innerHTML=data_html +'<div class="data_t_classes" id="data_' + id +'">'+id+'</div>';
}
	
	for(i=1;i<=15;i++) {
 		document.getElementById("s" + i).style.display = "none";
 
 	}
	
 		document.getElementById("OMIS 327").style.background='white';
		document.getElementById("OMIS 327").style.color='black';
		
		document.getElementById("OMIS 444").style.background='white';
		document.getElementById("OMIS 444").style.color='black';
		
		document.getElementById("OMIS 450").style.background='white';
		document.getElementById("OMIS 450").style.color='black';
		
		document.getElementById("OMIS 478").style.background='white';
		document.getElementById("OMIS 478").style.color='black';
		
		document.getElementById("OMIS 480").style.background='white';
		document.getElementById("OMIS 480").style.color='black';
		
		document.getElementById("OMIS 352").style.background='white';
		document.getElementById("OMIS 352").style.color='black';
		
		document.getElementById("OMIS 449").style.background='white';
		document.getElementById("OMIS 449").style.color='black';
		
		document.getElementById("OMIS 460").style.background='white';
		document.getElementById("OMIS 460").style.color='black';
		
		document.getElementById("OMIS 462").style.background='white';
		document.getElementById("OMIS 462").style.color='black';
		
		document.getElementById("OMIS 475").style.background='white';
		document.getElementById("OMIS 475").style.color='black';
	
	

}

function UpdateSupplyChain(id) {
	document.getElementById("data_classes").innerHTML='';
	document.getElementById("information_classes").innerHTML='';
	

 if(document.getElementById("supply_" + id)) {
 	document.getElementById(id).style.background='white';
	document.getElementById(id).style.color='black';
 	var elem = document.getElementById("supply_" + id);
    elem.parentNode.removeChild(elem);
} else {
	supply_html=document.getElementById("supply_classes").innerHTML;
	document.getElementById(id).style.background='green';
	document.getElementById(id).style.color='white';
	document.getElementById("supply_classes").innerHTML=supply_html +'<div class="supply_t_classes" id="supply_' + id +'">'+id+'</div>';
}
	
	for(i=1;i<=15;i++) {
 		document.getElementById("s" + i).style.display = "none";
 
 	}


		document.getElementById("OMIS 324").style.background='white';
		document.getElementById("OMIS 324").style.color='black';
		
		document.getElementById("OMIS 472").style.background='white';
		document.getElementById("OMIS 472").style.color='black';
		
		document.getElementById("OMIS 473").style.background='white';
		document.getElementById("OMIS 473").style.color='black';
		
		document.getElementById("OMIS 474").style.background='white';
		document.getElementById("OMIS 474").style.color='black';
		
		document.getElementById("OMIS 482").style.background='white';
		document.getElementById("OMIS 482").style.color='black';
		
		document.getElementById("OMIS 352").style.background='white';
		document.getElementById("OMIS 352").style.color='black';
		
		document.getElementById("OMIS 449").style.background='white';
		document.getElementById("OMIS 449").style.color='black';
		
		document.getElementById("OMIS 460").style.background='white';
		document.getElementById("OMIS 460").style.color='black';
		
		document.getElementById("OMIS 462").style.background='white';
		document.getElementById("OMIS 462").style.color='black';
		
		document.getElementById("OMIS 475").style.background='white';
		document.getElementById("OMIS 475").style.color='black';
	
}

function UpdateInformation(id) {
	document.getElementById("data_classes").innerHTML='';
	document.getElementById("supply_classes").innerHTML='';
	

 if(document.getElementById("info_" + id)) {
 	document.getElementById(id).style.background='white';
	document.getElementById(id).style.color='black';
 	var elem = document.getElementById("info_" + id);
    elem.parentNode.removeChild(elem);
} else {
	info_html=document.getElementById("supply_classes").innerHTML;
	document.getElementById(id).style.background='green';
	document.getElementById(id).style.color='white';
	document.getElementById("information_classes").innerHTML=info_html +'<div class="info_t_classes" id="info_' + id +'">'+id+'</div>';
}
	
	for(i=1;i<=15;i++) {
 		document.getElementById("s" + i).style.display = "none";
 
 	}


		document.getElementById("OMIS 324").style.background='white';
		document.getElementById("OMIS 324").style.color='black';
		
		document.getElementById("OMIS 472").style.background='white';
		document.getElementById("OMIS 472").style.color='black';
		
		document.getElementById("OMIS 473").style.background='white';
		document.getElementById("OMIS 473").style.color='black';
		
		document.getElementById("OMIS 474").style.background='white';
		document.getElementById("OMIS 474").style.color='black';
		
		document.getElementById("OMIS 482").style.background='white';
		document.getElementById("OMIS 482").style.color='black';
		
		document.getElementById("OMIS 327").style.background='white';
		document.getElementById("OMIS 327").style.color='black';
		
		document.getElementById("OMIS 444").style.background='white';
		document.getElementById("OMIS 444").style.color='black';
		
		document.getElementById("OMIS 450").style.background='white';
		document.getElementById("OMIS 450").style.color='black';
		
		document.getElementById("OMIS 478").style.background='white';
		document.getElementById("OMIS 478").style.color='black';
		
		document.getElementById("OMIS 480").style.background='white';
		document.getElementById("OMIS 480").style.color='black';
	
}

function UpdateOthers(id){

	if(document.getElementById("t_" + id)) {
 	document.getElementById(id).style.background='white';
	document.getElementById(id).style.color='black';
 	var elem = document.getElementById("t_" + id);
    elem.parentNode.removeChild(elem);
} else {
	other_html=document.getElementById("other_classes").innerHTML;
	document.getElementById(id).style.background='green';
	document.getElementById(id).style.color='white';
	document.getElementById("other_classes").innerHTML=other_html +'<div class="t_classes" id="t_' + id +'">'+id+'</div>';
}
}
function UpdateTranscript(id) {
	
 if(document.getElementById("t_" + id)) {
 	document.getElementById(id).style.background='white';
	document.getElementById(id).style.color='black';
 	var elem = document.getElementById("t_" + id);
    elem.parentNode.removeChild(elem);
} else {
	trans_html=document.getElementById("transcript_classes").innerHTML;
	document.getElementById(id).style.background='green';
	document.getElementById(id).style.color='white';
	document.getElementById("transcript_classes").innerHTML=trans_html +'<div class="t_classes" id="t_' + id +'">'+id+'</div>';
}
	
	for(i=1;i<=5;i++) {
 		document.getElementById("c" + i).style.display = "none";
 
 }

}

function ShowDescription(id) {

 for(i=1;i<=5;i++) {
 		document.getElementById("c" + i).style.display = "none";
 
 }
 
  document.getElementById(id).style.display = "block";

}

function ShowDescription2(id) {

 for(i=1;i<=4;i++) {
 		document.getElementById("d" + i).style.display = "none";
 
 }
 
  document.getElementById(id).style.display = "block";

}

function ShowOtherDescription(id) {

 for(i=1;i<=4;i++) {
 		document.getElementById("other" + i).style.display = "none";
 
 }
 
  document.getElementById(id).style.display = "block";

}

function ShowStudyDescription(id) {

 for(i=1;i<=15;i++) {
 		document.getElementById("s" + i).style.display = "none";
 
 }
 
  document.getElementById(id).style.display = "block";

}
