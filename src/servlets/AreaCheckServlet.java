package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    private ServletConfig config;

    public static class Point {
        public int x;
        public int y;
        public int r;
        public String check;

        public Point(int x, int y, int r, String check) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.check = check;
        }

        public Point(double x, double y, double r, String check) {
            this.x = (int) x;
            this.y = (int) y;
            this.r = (int) r;
            this.check = check;
        }

        public Point() {
        }
    }

    private List<Point> list = null;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        super.doPost(req, resp);
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        this.config = config;
    }

    @Override
    public ServletConfig getServletConfig() {
        return config;
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (list == null) {
            list = new ArrayList<Point>();
            config.getServletContext().setAttribute("list", list);
        }
        String json = req.getParameter("Xh");
        ObjectMapper mapper = new ObjectMapper();
        List<Point> points = Arrays.asList(mapper.readValue(json, Point[].class));
        list.addAll(points);

        Integer y = Integer.parseInt(req.getParameter("Y"));
        Integer r = Integer.parseInt(req.getParameter("hehe"));
        String[] arr = req.getParameterValues("X[]");
        int[] ary = new int[arr.length];
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/html");
        resp.setCharacterEncoding("UTF-8");
        out.println("<html>");
        out.println("<head>");
        out.println("<title> HELP ME </title>");
        out.println("<script src=\"script.js\"></script>\n" +
                "<link rel='stylesheet' type='text/css' href='answer.css' />");
        out.println("</head>");

        out.println("<body>");
        out.println("<div class=\"container\">\n" +
                "  <canvas id=\"canvas\" width=\"230px\" height=\"230px\" style=\"border:1px solid #d3d3d3;\">\n" +
                "    gaa goo lmao dont kill me\n" +
                "  </canvas>\n" +
                "  <script>plotV(" + r + ")</script>\n");

        out.println("<table align=\"center\">");
        out.println("<tr>");
        out.println("<td width=\"50px\">");
        out.println("<b>   X   </b>");
        out.println("</td>");
        out.println("<td width=\"50px\">");
        out.println("<b>   Y   </b>");
        out.println("</td>");
        out.println("<td width=\"50px\">");
        out.println("<b>   R   </b>");
        out.println("</td>");
        out.println("<td width=\"50px\">");
        out.println("<b>   CHECK   </b>");
        out.println("</td width=\"50px\">");
        out.println("</tr>");

        for (int i = 0; i < arr.length; i++) {
            ary[i] = Integer.parseInt(arr[i]);
            if (
                    (ary[i] >= 0 && ary[i] <= r / 2 && y >= 0 && y <= r) ||
                            (ary[i] <= 0 && y >= 0 && y <= ary[i] / 2 + r / 2) ||
                            (ary[i] >= 0 && y <= 0 && (ary[i] * ary[i] + y * y) <= (r * r))
            ) {
                list.add(new Point(ary[i], y, r, "TRUE"));
                out.println("<script>drawDotInside(" + ary[i] + "," + y + "," + r + ")</script>");
                out.println("<tr>");
                out.println("<td width=\"50px\">\n" +
                        ary[i] + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        y + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        r + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        "TRUE!\n" +
                        "</td>\n");

            } else {
                list.add(new Point(ary[i], y, r, "FALSE"));
                out.println("<script>drawDotOutside(" + ary[i] + "," + y + "," + r + ")</script>");
                out.println("<tr>");
                out.println("<td width=\"50px\">\n" +
                        ary[i] + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        y + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        r + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        "FALSE" +
                        "</td>\n");
            }
        }

        out.print("</div>");
        out.println("</tr>");
        out.println("</table>" +
                "<br> <a href='http://localhost:8080/LmaoPipTheSecond_war_exploded'>Oh shit, here we go again...</a>");
        out.println("</body>");
    }
}

