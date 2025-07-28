#!/usr/bin/env python3
"""Module that defines a type-annotated function to add two floats."""


def add(a: float, b: float) -> float:
    """Return the sum of two float numbers.

    Args:
        a (float): The first number.
        b (float): The second number.

    Returns:
        float: The sum of a and b.
    """
    return a + b
