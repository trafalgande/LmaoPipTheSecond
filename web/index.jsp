<%@ page import="servlets.AreaCheckServlet" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>GAA GOO LMAO DONT KILL ME XD</title>
    <script src="script.js"></script>
    <style>
        <%@include file="/WEB-INF/css/style.css" %>
    </style>

</head>
<body>
<header>
    <div class="header">
        <div class="overlay">
            <h3>
                Чайка Алексей, гр. P3214
                Вариант: ххххх
            </h3>
        </div>
    </div>
</header>


</div>
<form class="form" id="form" action="controller" method="post" onsubmit="return validate(this)">
    <div class="left">
        <table>
            Х value:
            <tr>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="-5" onchange="valX();"> -5
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="-4" onchange="valX();"> -4
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="-3" onchange="valX();"> -3
                </td>
            </tr>
            <tr>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="-2" onchange="valX();"> -2
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="-1" onchange="valX();"> -1
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="0" onchange="valX();"> 0
                </td>
            </tr>
            <tr>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="1" onchange="valX();"> 1
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="2" onchange="valX();"> 2
                </td>
                <td width="50px">
                    <input type="checkbox" name="X[]" value="3" onchange="valX();"> 3<br>
                </td>

            </tr>
        </table>
        <p>
            Y value:
            <input type="text" pattern="^(?!-0$)-?(3$|([0-2](\.\d+)?))$" id="Y" name="Y" size="6"
                   placeholder=" от -3 до 3"
                   title="Используйте точку, целые и дробные числа от -3 до 3"
                   onkeyup="valY(this);" required>
        </p>
        <p>
            R value:
            <input type="button" name="R" value="1" onclick="f1(this); valR();">
            <input type="button" name="R" value="2" onclick="f1(this); valR();">
            <input type="button" name="R" value="3" onclick="f1(this); valR();">
            <input type="button" name="R" value="4" onclick="f1(this); valR();">
            <input type="button" name="R" value="5" onclick="f1(this); valR();">
            <input type="hidden" id="hehe" name="hehe">
        </p>
        <p>
            <input type="submit" id="sub" name="sub" disabled value="Submit">
        </p>

    </div>
</form>
<%
    List<AreaCheckServlet.Point> list = (ArrayList<AreaCheckServlet.Point>) getServletConfig().getServletContext().getAttribute("list");
%>
<form id="hiddenForm" method="post" action="area_checker">
    <input type="hidden" name="Xh" id="Xh">
<%--    <input type="submit" id="sub2" disabled value="kill me XD">--%>
</form>


<div class="right">
    <canvas id="canvas" width="230px" height="230px" onclick="setPoint(event);"
            onmousemove="showCoords(event)" onmouseleave="eraseCoords(event)"
            style="border:1px solid #d3d3d3;">
        gaa goo lmao dont kill me
    </canvas>
    <p id="check"></p>
    <p id="err"></p>

    <script>plot()</script>
</div>
<div class="center">

    <table id="res">
        <tr>
            <td width="50px">
                <b>X</b>
            </td>
            <td width="50px">
                <b>Y</b>
            </td>
            <td width="50px">
                <b>R</b>
            </td>
            <td width="50px">
                <b>CHECK</b>
            </td>
        </tr>

        <%
            if (list != null) {
                for (int i = 0; i < list.size(); i++) {
        %>
        <tr>
            <td width="50px">
                <%= list.get(i).x %>
            </td>
            <td width="50px">
                <%= list.get(i).y %>
            </td>
            <td width="50px">
                <%= list.get(i).r %>
            </td>
            <td width="50px">
                <%= list.get(i).check %>
            </td>
        </tr>
        <%
                }
            }
        %>
    </table>
</div>
</body>
<footer class="footer">

    copyrights reserved 2019 pepeHands

</footer>
