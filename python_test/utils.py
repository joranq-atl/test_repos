"""Utility functions for the Python test."""


def add_numbers(a, b):
    """Add two numbers together."""
    return a + b


def multiply_numbers(a, b):
    """Multiply two numbers together."""
    return a * b


class Calculator:
    """A simple calculator class."""

    def __init__(self):
        self.history = []

    def calculate(self, a, b, operation):
        """Perform a calculation and store in history."""
        if operation == "add":
            result = add_numbers(a, b)
        elif operation == "multiply":
            result = multiply_numbers(a, b)
        else:
            result = 0

        self.history.append(result)
        return result

    def get_history(self):
        """Get calculation history."""
        return self.history
