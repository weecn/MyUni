<% %>
<html>
<head>
<title>backuser</title>
<style type="text/css">
body, table, td, select, textarea, input {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 11px;
}
</style>
<link rel="stylesheet" type="text/css" title="xp"
	href="../css/skins/xp/validator/component.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="../css/skins/xp/navbar/nav.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="../css/skins/xp/table/skin.css" />
<link rel="stylesheet" type="text/css" title="xp"
	href="../css/skins/xp/time/skin.css" />

</head>


<body>
	<div id="main">
		<form name="sportform" method="post" action="">
			<table class="sadminheading" style="top-margin: 10">
				<tr>
					<td nowrap class="admintitle" colspan="3" align="center">用户列表
					</td>
				</tr>

				<tr>
					<td align="left" width="10%">用户名:</td>
					<td align="left" width="40%"><input name="name" type="text" />
					</td>
					<td align="right"><input type="submit" name="提交" value="提交" />&nbsp;&nbsp;&nbsp;
						<input type="hidden" name="pagenum" value="" /> <input
						type="hidden" name="pagerows" value="" /></td>
				</tr>


			</table>
		</form>
		<table class="standard">
			<thead>
				<tr>
					<th>id</th>
					<th>用户名</th>
					<th>用户密码</th>
					<th>角色</th>
					<th>email</th>
					<th>是否有效</th>
					<th>&nbsp;</th>

				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Jacky</td>
					<td>123456</td>
					<td>普通录入人员</td>
					<td>email</td>
					<td>有效</td>

					<td><a href='#' onclick="location.href='user_update.html';">修改</a>
						<a href='#'
						onclick="if(confirm('delete')) location.href='user_list.html?id=1';">删除</a>
					</td>

				</tr>
				<tr>
					<td colspan="7">No data found</td>
				</tr>

			</tbody>
			<tfoot>
				<tr>
					<td colspan="3" style="text-align: left">1/1 total rows 1</td>
					<td colspan="4" align="right"><a href="#"
						onclick="turn(document.forms[0],'first',5,1,'jump page');">first</a>
						<a href="#"
						onclick="turn(document.forms[0],'prev', 5,1,'jump page');">prev</a>

						<a href="#"
						onclick="turn(document.forms[0],'next',5,1,'jump page');">next</a>
						<a href="#"
						onclick="turn(document.forms[0],'last',5,1,'jump page');">last</a>


						go <input type="text" name="cpage" size="5" id="jumpto" /> <a
						href="#" onclick="turn(document.forms[0],'jump',5,1,'jump page');">go</a>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</body>
</html>
