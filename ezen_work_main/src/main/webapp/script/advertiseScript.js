function change() {

	var f=document.forms[0];
	
	if(f.numselect.value==""){ 
		f.ad_num.value="";
		f.ad_num.readOnly=true;
		f.ad_num.focus();
		return;
	}
	if(f.numselect.value=="direct"){ 
		f.ad_num.value="";
		f.ad_num.readOnly=false;
		f.ad_num.focus();
		return;
	}
	f.ad_num.value=f.numselect.value;
	f.ad_num.readOnly=true;
	f.ad_num.focus();
}
