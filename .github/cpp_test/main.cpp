#include <iostream>
#include "math_ops.h"

int process_values(int a, int b) {
    int temp = MathOps::add(a, b);
    return MathOps::subtract(temp, 5);
}

int main() {
    MathOps::Calculator calc;

    calc.add(10);
    calc.add(5);
    calc.subtract(3);

    std::cout << "Calculator result: " << calc.getResult() << std::endl;

    int result = process_values(20, 15);
    std::cout << "Process result: " << result << std::endl;

    return 0;
}
