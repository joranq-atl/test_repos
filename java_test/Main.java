import utils.StringUtils;

public class Main {
    public static void main(String[] args) {
        System.out.println("Starting application...");

        Calculator calc = new Calculator("SimpleCalculator");
        System.out.println("Created " + calc.getName());

        int sum = calc.add(5, 3);
        System.out.println("Sum: " + sum);

        String message = "calculation complete";
        System.out.println(StringUtils.toUpperCase(message));
    }
}
