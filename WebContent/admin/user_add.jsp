<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<%--
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
--%>

<html>
<head>
<%--<base href="<%=basePath%>" /> --%>
<title>用户添加</title>
<link rel="stylesheet" type="text/css" title="xp"
	href="css/skins/xp/validator/component.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="css/skins/xp/navbar/nav.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="css/skins/xp/table/skin.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="css/skins/xp/time/skin.css" />
<script type="text/javascript" src="jscript/time/calendar.js"></script>
<script type="text/javascript" src="jscript/time/calendar-zh.js"></script>
<script type="text/javascript" src="jscript/time/calendar-setup.js"></script>
<script type="text/javascript" src="jscript/common.js"></script>
<script type="text/javascript" src="jscript/validator/form_validator.js" /></script>



<style type="text/css">
body, table, td, select, textarea, input {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 11px;
}
</style>
</head>
<body>
	<div id="main">


		<form name="backuserform" method="post" action="admin/userAddServlet"
			onSubmit='return submitForm(document.forms[0]);'>
			<table class="standard">
				<thead>
					<tr>
						<th align="center" colspan="2">用户添加</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td align="left">用户名</td>
						<td align="left"><input name="name" type="text" TABINDEX="1"
							id="name" />
							<div class="Info">
								<div id="name_info"></div>
							</div></td>
					</tr>
					<tr>
						<td align="left">用户密码</td>
						<td align="left"><input name="password" type="password"
							value="" TABINDEX="2" id="password" />
							<div class="Info">
								<div id="password_info"></div>
							</div></td>
					</tr>

					<tr>
						<td align="left">角色</td>
						<td align="left"><select name="role" TABINDEX="4" id="role">
								<option value="1">超级管理员</option>
						</select>

							<div class="Info">
								<div id="role_info"></div>
							</div></td>
					</tr>

					<tr>
						<td align="left">是否有效</td>
						<td align="left"><select name="valid" TABINDEX="3" id="valid">
								<option value="1">有效</option>
								<option value="0">无效</option>
						</select>
							<div class="Info">
								<div id="valid_info"></div>
							</div></td>
					</tr>
					<tr>
						<td align="left">EMAIL</td>
						<td align="left"><input name="email" type="text" value=""
							TABINDEX="5" id="email" />
							<div class="Info">
								<div id="email_info"></div>
							</div></td>
					</tr>

					<tr>
						<td align="left">电话</td>
						<td align="left"><input name="phone" type="text" value=""
							TABINDEX="6" id="phone" />
							<div class="Info">
								<div id="phone_info"></div>
							</div></td>
					</tr>

					<tr>
						<td colspan="2" align="center"><input class="submitButton"
							type="submit" TABINDEX="7" name="submit" value="提&nbsp;交">
							<input type="button" name="返回" class="submitButton" value="返回"
							onclick="history.back();"></td>
					</tr>

				</tbody>
				<tfoot>
					<tr>
						<td colspan="2" style="text-align: left"></td>

					</tr>
				</tfoot>
			</table>
		</form>
	</div>
</body>
</html>



















