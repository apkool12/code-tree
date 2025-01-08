import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String t = sc.next();
        String s = sc.next();

        String temp;
        temp = t;
        t = s;
        s = temp;

        System.out.printf("%s\n%s",t,s);
    }
}