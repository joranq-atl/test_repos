import utils.StringUtils;

public class Calculator {
    private String name;

    public Calculator(String name) {
        if (StringUtils.isEmpty(name)) {
            this.name = "Default";
        } else {
            this.name = StringUtils.toUpperCase(name);
        }
    }

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public String getName() {
        return this.name;
    }
}
