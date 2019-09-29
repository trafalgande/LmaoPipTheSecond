package servlets;


public class CoordinatesDto {
    private String x;
    private String y;
    private String r;
    private String ch;

    public CoordinatesDto() {
    }

    public CoordinatesDto(String x, String y, String r, String ch) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.ch = ch;
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }

    public String getCh() {
        return ch;
    }

    public void setCh(String ch) {
        this.ch = ch;
    }
}
