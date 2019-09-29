package servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String x = req.getParameter("X[]");
        String y = req.getParameter("Y");
        String r = req.getParameter("hehe");

        if(x == null || y == null || r == null || req.getParameter("Xh") == null){
            req.getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        } else {
            req.getServletContext().getRequestDispatcher("/area_checker").forward(req, resp);
        }
    }
}
