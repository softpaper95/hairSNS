<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="kr">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	    <link rel="stylesheet" href="../css/login/main.css">
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	</head>
	<body>
	    <div class="logo_box">
	        <p>LOGIN</p>
	    </div>
	    <div class ="content_box">
	        <form method = 'post' action="loginAction.jsp" class="input_box">
	            <input class="input_id" id="input_id" type="text" placeholder="Id" name="userId">
	            <input class="input_pw" id="input_pw" type="text" placeholder="Password" name="userPw">
	            <a href = 'createUser' class="btn btn-primary create_ac" type="submit">Create Account</a>
	           	<input class="btn btn-primary signIn" type="submit" value = "submit">
	        </form>

	        <!-- <div class="connectBox">
	            <button class="btn btn-primary with_google" type="button">Continue with Google</button>
	            <button class="btn btn-primary with_git" type="button">Continue with Git</button>
	        </div> -->

	    </div>
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
	    <script src="../js/login/login.js"></script>
	</body>
</html>