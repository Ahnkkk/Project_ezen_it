function checkId() {
	var sId = document.writeForm.id.value;
	
	if(!sId) {
		alert("먼저 아이디를 입력하세요.");
		document.writeForm.id.focus();
	} else {
		window.open("checkId.do?id=" + sId, "",
				    "width=400 height=100 left=500 top=200");
	}
}

function checkLogin() {
	var frm = document.loginForm;
	
	if(!frm.id.value) {
		alert("아이디를 입력하세요.");
		frm.id.focus();
	} else if(!frm.pw.value) {
		alert("비밀번호를 입력하세요.");
		frm.pw.focus();
	} else {
		frm.submit();
	}
}
