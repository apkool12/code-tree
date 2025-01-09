import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.useDelimiter("-");
        String First = sc.next();
        String Middle = sc.next();
        String Last = sc.next();
        System.out.printf("%s-%s-%s",First,Last,Middle);
    }
}