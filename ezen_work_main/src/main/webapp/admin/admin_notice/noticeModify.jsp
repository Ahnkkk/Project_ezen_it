<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	if(${result > 0}){
		alert("수정을 완료하였습니다.");
		location.href="noticeView.do?seq=" + ${seq} + "&pg=" + ${pg};
	}else{
		alert("수정을 완료하지 못했습니다.");
		location.href="history.back()";
	}
	
</script>
</head>
<body>

</body>
</html>