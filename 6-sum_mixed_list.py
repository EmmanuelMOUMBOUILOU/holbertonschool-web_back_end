#!/usr/bin/env python3
"""Module that defines a type-annotated function to sum a list of ints and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): The list of mixed numeric types.

    Returns:
        float: The sum as a float.
    """
    return sum(mxd_lst)
