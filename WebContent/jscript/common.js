//pagination
function turn(frm,oper,totalpage,curpage,msg){	
		
	if(oper=='first'){
		if(curpage==1){
			return;
		}
		frm.pagenum.value = 1;
		frm.submit();
		return;
	}else if(oper=='prev'){
		if(curpage==1){
			return;
		}
		frm.pagenum.value = (curpage-1);
		frm.submit();
		return;
	}else if(oper=='next'){
		if(curpage>=totalpage){
			return;
		}
		frm.pagenum.value = (curpage+1);
		frm.submit();
		return;
	}else if(oper=='last'){
		if(curpage>=totalpage){
			return;
		}
		frm.pagenum.value = totalpage;
		frm.submit();
		return;
	}else if(oper=='jump'){
		var jpage = document.getElementById("jumpto");
		var jpagev = curpage;
		if(jpage.value==""||!(jpage.value.search(/^(-|\+)?\d+$/) != -1)){
			alert(msg);
			jpage.focus();
			jpage.select();
			return;
		}else{
			jpagev = parseInt(jpage.value);
		}
		if(jpagev==curpage||jpagev>totalpage||jpagev<=0){
			return;
		}
		frm.pagenum.value = jpagev;
		frm.submit();
		return;
	}
}	

//manufactur and model transfer
function changeModelByManID(manid){  
	if(manid==""){
		for (i= document.forms[0].model.options.length-1;i>0  ;--i){
			 document.forms[0].model.options[i] = null; 
		}
	}    
	var i,j;
	for (i= document.forms[0].model.options.length-1;i>=0  ;--i){
			 document.forms[0].model.options[i] = null; 
	}
	document.forms[0].model.options[0] = new Option("",""); 
	j = 1;	
	for (i=0 ;i< moduleclass.length ;i++){
		if (manid == moduleclass[i][2]){
			document.forms[0].model.options[j] = new Option(moduleclass[i][1],moduleclass[i][0]); 
			++j;
		}
	}
}

function changeModelByManName(manname){  
	var manid='';
	if(manname==""){
		for (i= document.forms[0].model_name.options.length-1;i>0  ;--i){
			 document.forms[0].model_name.options[i] = null; 
		}
	}
	for (i=0 ;i< manclass.length ;i++){
		if (manname == manclass[i][1]){
			manid = manclass[i][0];
			break;
		}
	}    
	if(manid==''){
		return;
	}
	var i,j;
	for (i= document.forms[0].model_name.options.length-1;i>=0  ;--i){
			 document.forms[0].model_name.options[i] = null; 
	}
	document.forms[0].model_name.options[0] = new Option("",""); 
	j = 1;	
	for (i=0 ;i< moduleclass.length ;i++){
		if (manid == moduleclass[i][2]){
			document.forms[0].model_name.options[j] = new Option(moduleclass[i][1],moduleclass[i][0]); 
			++j;
		}
	}
}

function changeModelByManName1(manname){  
	var manid='';
	if(manname==""){
		for (i= document.forms[0].model.options.length-1;i>0  ;--i){
			 document.forms[0].model.options[i] = null; 
		}
	}
	for (i=0 ;i< manclass.length ;i++){
		if (manname == manclass[i][1]){
			manid = manclass[i][0];
			break;
		}
	}    
	if(manid==''){
		return;
	}
	var i,j;
	for (i= document.forms[0].model.options.length-1;i>=0  ;--i){
			 document.forms[0].model.options[i] = null; 
	}
	document.forms[0].model.options[0] = new Option("",""); 
	j = 1;	
	for (i=0 ;i< moduleclass.length ;i++){
		if (manid == moduleclass[i][2]){
			document.forms[0].model.options[j] = new Option(moduleclass[i][1],moduleclass[i][0]); 
			++j;
		}
	}
}