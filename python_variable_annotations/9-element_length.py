#!/usr/bin/env python3
"""Module that defines a function returning a list of tuples with elements and their lengths."""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples where each tuple contains an element from lst and its length.

    Args:
        lst (Iterable[Sequence]): An iterable of sequences (like strings, lists, etc.).

    Returns:
        List[Tuple[Sequence, int]]: List of tuples with element and its length.
    """
    return [(i, len(i)) for i in lst]
