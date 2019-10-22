package servlets;


import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    private ServletConfig config;

    public static class Point {
        public double x;
        public double y;
        public int r;
        public String check;

       /* public Point(int x, int y, int r, String check) {
            this.x = (double) x;
            this.y = (double) y;
            this.r = r;
            this.check = check;
        }*/

        public Point(double x, double y, int r, String check) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.check = check;
        }

        public Point() {
        }

    }

    private List<Point> list = null;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
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
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (list == null) {
            list = new ArrayList<>();
            config.getServletContext().setAttribute("list", list);
        }

        Double x = Double.parseDouble(req.getParameter("X"));
        Double y = Double.parseDouble(req.getParameter("Y"));
        String[] arr = req.getParameterValues("R[]");
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


        for (int i = 0; i < arr.length; i++) {
            ary[i] = Integer.parseInt(arr[i]);
            out.println("<script>plotV(" + ary[i] + "," + i + ")</script>\n");
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

            if (

                    (x >= -ary[i]/2 && x <= 0 && y >= 0 && y <= ary[i]) ||
                            (x <= 0 && y <= 0 && (x * x + y * y) <= (ary[i] * ary[i])) ||
                            (x >= 0 && y <= 0 && y >= x/2 + ary[i])
            ) {
                list.add(new Point(x, y, ary[i], "TRUE"));
                out.println("<script>drawDotInside(" + x + "," + y + "," + ary[i] + "," + i + ")</script>");
                out.println("<tr>");
                out.println("<td width=\"50px\">\n" +
                        x + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        y + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        ary[i] + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        "TRUE!\n" +
                        "</td>\n");

            } else {
                list.add(new Point(x, y, ary[i], "FALSE"));
                out.println("<script>drawDotOutside(" + x + "," + y + "," + ary[i] + "," + i + ")</script>");
                out.println("<tr>");
                out.println("<td width=\"50px\">\n" +
                        x + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        y + "\n" +
                        "</td>\n");
                out.println("<td width=\"50px\">\n" +
                        ary[i] + "\n" +
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

    public static String check(double x, double y, int r){
        if(
        (x >= -r/2 && x <= 0 && y >= 0 && y <= r) ||
                (x <= 0 && y <= 0 && (x * x + y * y) <= (r * r)) ||
                (x >= 0 && y <= 0 && y >= x/2 + r)
        ) {
            return "TRUE";
        } else return "FALSE";
    }
}

