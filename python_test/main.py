"""Main module for Python test."""

from utils import Calculator, add_numbers


def process_data(data):
    """Process a list of data."""
    result = []
    for item in data:
        processed = add_numbers(item, 10)
        result.append(processed)
    return result


def main():
    """Main function."""
    calc = Calculator()

    # Test calculator
    calc.calculate(5, 3, "add")
    calc.calculate(4, 2, "multiply")

    # Process some data
    data = [1, 2, 3, 4, 5]
    processed = process_data(data)

    print(f"Processed: {processed}")
    print(f"History: {calc.get_history()}")


if __name__ == "__main__":
    main()
