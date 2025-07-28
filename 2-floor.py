#!/usr/bin/env python3
"""Module that defines a type-annotated function to return the floor of a float."""

import math


def floor(n: float) -> int:
    """Return the floor of a floating-point number.

    Args:
        n (float): The number to floor.

    Returns:
        int: The floor value of n.
    """
    return math.floor(n)
