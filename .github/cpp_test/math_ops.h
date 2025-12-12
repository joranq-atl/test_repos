#ifndef MATH_OPS_H
#define MATH_OPS_H

namespace MathOps {
    int add(int a, int b);
    int subtract(int a, int b);

    class Calculator {
    private:
        int result;
    public:
        Calculator();
        void add(int value);
        void subtract(int value);
        int getResult();
    };
}

#endif
