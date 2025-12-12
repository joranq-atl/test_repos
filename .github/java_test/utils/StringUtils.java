package utils;

public class StringUtils {
    public static String toUpperCase(String input) {
        if (input == null) {
            return "";
        }
        return input.toUpperCase();
    }

    public static boolean isEmpty(String input) {
        return input == null || input.length() == 0;
    }
}
