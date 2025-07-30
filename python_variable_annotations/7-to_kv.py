#!/usr/bin/env python3
"""
Module that provides a function to return a tuple with a string
and a squared number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is a string and the second is
    the square of the int or float provided, as a float.

    Args:
        k (str): The key.
        v (int or float): The value to square.

    Returns:
        Tuple[str, float]: A tuple with the key and the squared value as float.
    """
    return (k, float(v ** 2))
