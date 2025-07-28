#!/usr/bin/env python3
"""Module that defines a type-annotated function returning a tuple with a string and a float squared value."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is string k and the second
    element is the square of v as a float.

    Args:
        k (str): The string key.
        v (Union[int, float]): The number to be squared.

    Returns:
        Tuple[str, float]: Tuple containing k and v squared as float.
    """
    return (k, float(v ** 2))
