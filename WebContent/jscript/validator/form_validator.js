/////////////////////////////////////////////////////////////
//                Setup Class Names
/////////////////////////////////////////////////////////////
//default classes for infobox
var infoboxOkClass		= "OkMsg";
var infoboxWarningClass	= "WarningMsg";
var infoboxErrorClass	= "ErrorMsg";
var infoboxHintClass	= "HintMsg";
//default classes for input field
var inputWarningClass	= "Warning";
var inputErrorClass		= "Error";
var inputOkClass		= "Ok";
var inputNormalClass	= "Normal";

/////////////////////////////////////////////////////////////
//                Initialize Form
/////////////////////////////////////////////////////////////
function initForm(){	
	//initialize form UI and add triggers
	var infobox;
	var x = document.getElementById("Content");
	if(!x) return;
	var y = x.getElementsByTagName("input");
	for (var i=0;i<y.length;i++){
		if(y[i].type == 'text' || y[i].type == 'password'){
			initStatus(y[i],true);
			setFiledWidth(y[i]);
			y[i].onfocus	= getFocus;
			y[i].onblur		= lostFocus;
			y[i].onkeyup	= showMyStatus;
		}
		if(y[i].type == "checkbox" ){
			initStatus(y[i],false);
			y[i].onfocus	= getFocus;
			y[i].onblur		= lostFocus;
			y[i].onkeyup	= showMyStatus;
		}			
	}
}
function initStatus(obj,isInput){
	if(isInput){
		if(isRequired(obj)) showStatus(obj,"Warning");
		else showStatus(obj,"Normal");
	}
	
	var infobox = getInfobox(obj);
	var errorCode = getInitStatus(obj);
	if(infobox && infobox.innerHTML == ""){
		if(!errorCode || errorCode == 0){
			infobox.className	= infoboxHintClass;
			infobox.innerHTML	= getErrorMsg(obj,0);
		}
		if(errorCode >0){
			infobox.className	= infoboxErrorClass;
			infobox.innerHTML	= getErrorMsg(obj,errorCode);
		}
	}	
}
/////////////////////////////////////////////////////////////
//                Base Functions
/////////////////////////////////////////////////////////////
function isIE() {
	if(document.all) return true;
	return false;
}
function setFiledWidth(obj){
	obj.style.width=(19/3)*obj.size+11;
}
function formEle(required,datatype,parameter,infobox,errormsg,combine,status){
	this.r	= required;	
	this.d	= datatype;
	this.p	= parameter;
	this.i	= infobox;
	this.e	= errormsg;
	this.c = combine;
	this.s = status;
}
function isRequired(obj){
	if(obj.id){ 
		return eval(obj.id).r;
	}
	return false;
}
function isCombine(obj){
	if(obj.id){
		if(eval(obj.id).c) return eval(obj.id).c;
	}
	return false;
}
function getDatatype(obj){
	if(obj.id){
		if(eval(obj.id).d) return eval(obj.id).d;
	}
	return false;
}
function getInfobox(obj){
	if(obj.id){
		if(eval(obj.id).i && document.getElementById(eval(obj.id).i)) return document.getElementById(eval(obj.id).i);
	}
	return;
}
function getErrorMsg(obj,errorCode){
	if(obj.id){
		if(eval(obj.id).e[errorCode]) return eval(obj.id).e[errorCode];
	}
	return;
}
function getHintMsg(obj){
	if(obj.id){
		if(eval(obj.id).e[0]) return eval(obj.id).e[0];
	}
	return;
}
function getInitStatus(obj){
	if(obj.id){
		if(eval(obj.id).s || eval(obj.id).s==0 ) return eval(obj.id).s;
	}
	return;
}
function getAttrName(str){
	var s=str.split("=");
	return s[0];
}
function getAttrValue(str){
	var s=str.split("=");
	return s[1];
}
function getAttrValueByName(obj,str){
	var para;
	if(obj.id){
		if(eval(obj.id).p) para=eval(obj.id).p;
		else return;
	}else{
		return;
	}
	var s = para.split(",");
	for(var i=0;i<s.length;i++){
		if(getAttrName(s[i]) == str){
			if(getAttrValue(s[i]))
				return getAttrValue(s[i]);
			else
				return;
		}
	}
	return;
}
function getMailServer(str){
	//be sure str is a correct email address
	str = str.trim();
	return str.substr(str.indexOf("@")+1);
}
function getMailAccount(str) {
	str = str.trim();
	return str.substr(0, str.indexOf("@"));
}
function isNumber(str) {
	var patn = new RegExp("^\\d{1,15}$"); 
	if (patn.test(str)) {
		return true;
	} else {
		return false; 	
	}
}

String.prototype.trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

/////////////////////////////////////////////////////////////
//                UI Functions
/////////////////////////////////////////////////////////////
function getFocus(evnt)
{
	var obj;
	if (isIE()) {
		obj = event.srcElement;
	}else {
		obj = evnt.target;
	}
	showInfo(obj,0);
}
function lostFocus(evnt)
{
	var obj;
	if (isIE()) {
		obj = event.srcElement;
	}else {
		obj = evnt.target;
	}
	showInfo(obj,-1);
}
function showInfo(obj,errorCode,forcible)
//Show Information in Infobox
//errorCode==0 for hint message
//if forcible==true, no matter what the status of infobox now, change it,
//otherwise,if the status of infobox is "Error", do not change it forever.
{
	var infobox = getInfobox(obj);
	if(infobox){
		if(infobox.className != infoboxErrorClass || forcible){
			if(errorCode == 0){
				infobox.className	= infoboxWarningClass;
				infobox.innerHTML	= getErrorMsg(obj,errorCode);
			}
			if(errorCode >0){
				infobox.className	= infoboxErrorClass;
				infobox.innerHTML	= getErrorMsg(obj,errorCode);
			}
			if(errorCode <0){
				infobox.className	= infoboxHintClass;
			}
		}
	}	
}
function showMyStatus(evnt){
	var obj,errorCode;
	if (isIE()) {
		obj = event.srcElement;
	}else {
		obj = evnt.target;
	}
	errorCode = validateValue(obj);
	if(errorCode == 0){
		showStatus(obj,"Ok");
	}
	if(errorCode >= 1){
		showStatus(obj,"Error");
	}
	if(errorCode < 0){
		showStatus(obj,"Normal");
	}
}
function showStatus(obj,stat)
//Show the status of user currently inputting field
//3 Statuses: Warning|Error|Ok
{
	switch(stat){
		case "Warning":
			obj.className = inputWarningClass;
			break;
		case "Error":
			obj.className = inputErrorClass;
			break;
		case "Ok":
			obj.className = inputOkClass;
			break;
		default:
			obj.className = inputNormalClass;
			break;
	}
}
/////////////////////////////////////////////////////////////
//                Validator Functions
/////////////////////////////////////////////////////////////
function validateValue(obj){
	//trim
	var patn = /(^\s)|(\s$)/;
	if(patn.test(obj.value))	obj.value = obj.value.trim();
	//switcher
	var errorCode = -1;
	switch(getDatatype(obj)){
		case "username":
			errorCode = validateUsername(obj);
			break;
		case "password":
			errorCode = validatePassword(obj);
			break;
		case "safepassword":
			errorCode = validateSafePassword(obj);
			break;
		case "email":
			errorCode = validateEmail(obj);
			break;
		case "mirror":
			errorCode = validateMirror(obj);
			break;
		case "num":
			errorCode = validateNum(obj);
			break;
		case "mobile":
			errorCode = validateMobile(obj);
			break;
		case "checkcode":
			errorCode = validateCheckCode(obj);
			break;
		case "content":
			errorCode = validateContent(obj);
			break;
		case "checkbox":
			errorCode = validateCheckbox(obj.name,1);
			break;
		case "date":
			errorCode = validateDate(obj);
			break;
		case "no":
			errorCode = 0;
			break;	
		default:
			errorCode = -1;
			break;
	}
	return errorCode;
}

function validateAll(formObj){
	var obj,infobox,pass;
	var pass = true;
	var newArr = new Array();
	var x = formObj;
	if(!x) return;
	
	var y = x.getElementsByTagName("input");
	
	for (var i=0;i<y.length;i++){
		obj = y[i];			
		infobox = getInfobox(y[i]);
		if(obj.type == 'text' || obj.type == 'password'){
			obj.value = obj.value.trim();
			if(!isRequired(obj) && obj.value == ""){
				showStatus(obj,"Ok");
				infobox.className	= infoboxHintClass;
				infobox.innerHTML	= "";
				continue;
			}
			if(isRequired(obj) && obj.value == ""){
				pass = false;
				obj.focus();
				showStatus(obj,"Error");
				infobox.className	= infoboxErrorClass;
				infobox.innerHTML	= requireErrorInfo + getErrorMsg(obj,0);
				//break;//if(isCombine(obj)) break;
				continue;
			}
			if(validateValue(obj)>0){
				pass = false;
				obj.focus();
				showStatus(obj,"Error");
				showInfo(obj,validateValue(obj),true);
				//break;//if(isCombine(obj)) break;
				continue;
			}
			
			if(validateValue(obj)==0){
				showStatus(obj,"Ok");
				infobox.className	= infoboxHintClass;
				infobox.innerHTML	= "";
				continue;
			}			
		}else if(obj.type == 'checkbox'){
			if(!isRequired(obj)){
				continue;
			}
			if(isRequired(obj) && validateValue(obj)>0){
				pass = false;
				obj.focus();
				showStatus(obj,"Error");
				infobox.className	= infoboxErrorClass;
				infobox.innerHTML	= requireErrorInfo + getErrorMsg(obj,0);
				//break;//if(isCombine(obj)) break;
				continue;
			}			
			if(validateValue(obj)==0){
				showStatus(obj,"Ok");
				infobox.className	= "";
				infobox.innerHTML	= "";
				continue;
			}		
		}
	}
	
	var z = x.getElementsByTagName("textarea");
	for (var i=0;i<z.length;i++){
		obj = z[i];			
		infobox = getInfobox(z[i]);
		obj.value = obj.value.trim();
		if(!isRequired(obj) && obj.value == ""&&(obj.id)){
			showStatus(obj,"Ok");
			infobox.className	= infoboxHintClass;
			infobox.innerHTML	= "";
			continue;
		}
		if(isRequired(obj) && obj.value == ""){
			pass = false;
			obj.focus();
			showStatus(obj,"Error");
			infobox.className	= infoboxErrorClass;
			infobox.innerHTML	= requireErrorInfo + getErrorMsg(obj,0);
			//break;//if(isCombine(obj)) break;
			continue;
		}
		if(validateValue(obj)>0){
			pass = false;
			obj.focus();
			showStatus(obj,"Error");
			showInfo(obj,validateValue(obj),true);
			//break;//if(isCombine(obj)) break;
			continue;
		}
		
		if(validateValue(obj)==0){
			showStatus(obj,"Ok");
			infobox.className	= infoboxHintClass;
			infobox.innerHTML	= "";
			continue;
		}
	}
	
	return pass;
}


//functions for each particular datatype validation
function validateUsername(obj){
	var str = obj.value;
	//str = quanjiao2Banjiao(str);
	//var patn =   /^[\u0391-\uFFE5a-zA-Z0-9][\u0391-\uFFE5\w]{2,20}$/; 
	var patn = /^[^\s]*$/;
	if(patn.test(str)){
		if(checkByteLength(str,5,20)) return 0;
	}
	return 1; 
}
function validatePassword(obj){
	var str = obj.value;
	var patn = /.{4,16}/; 
	if(patn.test(str)) return 0;
	return 1; 
}
function validateSafePassword(obj){
	var str = obj.value;
	//check length and alphabet
	var rank = 0;
	try {
		rank = PwdIntensity(str);
		printIntensity(rank);
	} catch (er) {
	}
	if(validatePassword(obj)>0) return 1;
	//check if same as username
	if(str == document.getElementById("username").value) return 2;
	//check if all the characters are the same
	for(var i=0;i<str.length;i++){
		if(str.charAt(0)!=str.charAt(i)) break;
	}
	if(i == str.length) return 3;
	//check if is number sequence
	var seqStr="01234567890";
	if(seqStr.indexOf(str) != -1) return 4;
	//check if is lower alphabet sequence
	var seqStr="abcdefghijklmnopqrstuvwxyz";
	if(seqStr.indexOf(str) != -1) return 5;
	//check if is upper alphabet sequence
	var seqStr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if(seqStr.indexOf(str) != -1) return 6;
	if (rank == 1) {
		//return 7;
	}
	//if validated
	return 0;
}

function validateEmail(obj){
	var str = obj.value;
	str = quanjiao2Banjiao(str);
	var patn = /^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]*)*@[a-zA-Z0-9\-]+([\.][a-zA-Z0-9\-]+)+$/;
	//var patn = /^[^\d\-_][\w\-]*[^\-_]@[^\-][a-zA-Z\d\-]*[^\-](\.[^\-][a-zA-Z\d\-]*[^\-])*\.[a-zA-Z]{3}(\.[a-zA-Z]{2})?$/;
	if(patn.test(str)){		
		return 0;
	}else{
		return 1; //incorrect format
	}
}
function validateNum(obj){
	var str = obj.value;
	var patn = /^\d+$/; 
	if(patn.test(str)) return 0;
	return 1; 	
}
function validateMobile(obj){
	var str = obj.value;
	var patn = /^1\d{10}$/;
	if(patn.test(str)) return 0;
	return 1; 	
}
function validateDate(obj){
	var str = obj.value.trim();
	if(isTime(str)){
		return 0;
	}else{
		return 1;
	}
}
function isTime(str){
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/; 
    var r = str.match(reg); 
    if(r==null) return false; 
    var d= new Date(r[1], r[3]-1,r[4]); 
    return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}
function validateCheckCode(obj){
	var str = obj.value;
	str = quanjiao2Banjiao(str);
	var patn = /^[0-9a-zA-Z]{4}$/;
	if(patn.test(str)) return 0;
	return 1;
}	
function validateCheckbox(name,min){
	var groups = document.getElementsByName(name);
	var hasChecked = 0;
	min = min || 1;
	for(var i=groups.length-1;i>=0;i--)
		if(groups[i].checked) hasChecked++;
	if(min <= hasChecked)
		return 0;
	return 1;
}	
function validateContent(obj){
	var str = obj.value;
	//str = quanjiao2Banjiao(str);
	//var patn =   /^[\u0391-\uFFE5a-zA-Z0-9][\u0391-\uFFE5\w]{2,20}$/; 
	var patn = /^[^\s]*$/;
	if(patn.test(str)){
		if(checkByteLength(str,5,200)) return 0;
	}
	return 1; 
}
function validateMirror(obj){
	if(validateSameAs(obj)){
		var sameobj = document.getElementById(getAttrValueByName(obj,"sameas"));
		var sameobj_dt;
		if(eval(sameobj.id).d) sameobj_dt=eval(sameobj.id).d;
		else return -1;
		if(sameobj_dt != "mirror"){ //avoid a mirror type filed being another mirror type filed's mirror
			if(validateValue(sameobj) == 0)	 return 0;
			else return 2;
		}
	}
	return 1;
}
function validateSameAs(obj){
	var v1,v2;
	if(!getAttrValueByName(obj,"sameas")) return true;
	v1=obj.value;
	v2=document.getElementById(getAttrValueByName(obj,"sameas")).value;
	if(v1 == v2) return true;
	return false;
}
function checkByteLength(str,minlen,maxlen) {
	if (str == null) return false;
	var l = str.length;
	var blen = 0;
	for(i=0; i<l; i++) {
		if ((str.charCodeAt(i) & 0xff00) != 0) {
			blen ++;
		}
		blen ++;
	}
	if (blen > maxlen || blen < minlen) {
		return false;
	}
	return true;
}

function quanjiao2Banjiao(str) {
	var i;
	var result = '';
	for (i = 0; i < str.length; i++) {
		code = str.charCodeAt(i);
		if (code >= 65281 && code < 65373) {
			result += String.fromCharCode(str.charCodeAt(i) - 65248);
		}
		else {
			result += str.charAt(i);
		}
	}
	return result;
}