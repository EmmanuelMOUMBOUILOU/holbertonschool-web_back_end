#!/usr/bin/env python3
"""Module to return list of tuples with element and its length."""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences and returns a list of tuples
    where each tuple contains the element and its length.

    Args:
        lst (Iterable[Sequence]): An iterable of sequences
            (like strings, lists, etc.)

    Returns:
        List[Tuple[Sequence, int]]: List of tuples (element, length
        of element).
    """
    return [(i, len(i)) for i in lst]
