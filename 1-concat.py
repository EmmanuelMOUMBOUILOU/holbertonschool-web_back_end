    #!/usr/bin/env python3
"""Module that defines a type-annotated function to concatenate two strings."""


def concat(str1: str, str2: str) -> str:
    """Return the concatenation of two strings.

    Args:
        str1 (str): The first string.
        str2 (str): The second string.

    Returns:
        str: The concatenated result of str1 and str2.
    """
    return str1 + str2
