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
                Вариант: 509
            </h3>
        </div>
    </div>
</header>


</div>
<form class="form" id="form" action="controller" method="get" onsubmit="return validate(this)">
    <div class="left">
        <p>
            X value:
            <input type="text" pattern="^(?!-0$)-?(5$|([0-2](\.\d+)?))$" id="X" name="X" size="6"
                   placeholder="от -5 до 3"
                   title="Используйте точку, целые и дробные числа от -5 до 3"
                   onkeyup="valX(this);" required>
        </p>
        <p>
        <table>
            Y value:
            <tr>
                <td>
                    <input type="radio" name="Y" required value="-2" onchange="valY()"> -2
                </td>
                <td>
                    <input type="radio" name="Y" required value="-1.5" onchange="valY()"> -1.5
                </td>
                <td>
                    <input type="radio" name="Y" required value="-1" onchange="valY()"> -1
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="Y" required value="-0.5" onchange="valY()"> -0.5
                </td>
                <td>
                    <input type="radio" name="Y" required value="0" onchange="valY()"> 0
                </td>
                <td>
                    <input type="radio" name="Y" required value="0.5" onchange="valY()"> 0.5
                </td>
            </tr>
            <tr>
                <td>
                    <input type="radio" name="Y" required value="1" onchange="valY()"> 1
                </td>
                <td>
                    <input type="radio" name="Y" required value="1.5" onchange="valY()"> 1.5
                </td>
                <td>
                    <input type="radio" name="Y" required value="2" onchange="valY()"> 2
                </td>
            </tr>
        </table>

        </p>
        <table>
            R value:
            <tr>
                <td>
                    <input type="checkbox" name="R[]" value="1" onchange="valR(); applyHiddenR(this);"> 1
                </td>
                <td>
                    <input type="checkbox" name="R[]" value="2" onchange="valR(); applyHiddenR(this);" > 2
                </td>
                <td>
                    <input type="checkbox" name="R[]" value="3" onchange="valR(); applyHiddenR(this);"> 3
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="R[]" value="4" onchange="valR(); applyHiddenR(this);"> 4
                </td>
                <td>
                    <input type="checkbox" name="R[]" value="5" onchange="valR(); applyHiddenR(this);"> 5
                </td>
            </tr>
        </table>
        <p>
            <input type="submit" id="sub" name="sub" disabled value="Submit">
        </p>
        <input type="hidden" id="hiddenR">
    </div>
</form>
<%
    List<AreaCheckServlet.Point> list = (ArrayList<AreaCheckServlet.Point>) getServletConfig().getServletContext().getAttribute("list");
%>
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
