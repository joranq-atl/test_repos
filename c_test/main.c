#include <stdio.h>
#include "utils.h"

int process_data(int data[], int size) {
    int result = 0;
    for (int i = 0; i < size; i++) {
        result = add(result, multiply(data[i], 2));
    }
    return result;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;

    int result = process_data(numbers, size);
    print_result(result);

    int sum = add(10, 20);
    print_result(sum);

    return 0;
}
