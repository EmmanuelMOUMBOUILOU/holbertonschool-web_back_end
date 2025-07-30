#!/usr/bin/env python3
"""Module that provides a function to create multiplier functions."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The value to multiply by.

    Returns:
        Callable[[float], float]: A function that takes a float
        and returns the product.
    """
    def multiplier_func(x: float) -> float:
        """Multiplies x by the outer multiplier."""
        return x * multiplier

    return multiplier_func
