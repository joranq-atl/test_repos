#include "math_ops.h"

namespace MathOps {
    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }

    Calculator::Calculator() : result(0) {}

    void Calculator::add(int value) {
        result = MathOps::add(result, value);
    }

    void Calculator::subtract(int value) {
        result = MathOps::subtract(result, value);
    }

    int Calculator::getResult() {
        return result;
    }
}
