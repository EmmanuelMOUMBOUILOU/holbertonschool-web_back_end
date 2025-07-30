#!/usr/bin/env python3
"""
1-async_comprehension module

Defines a coroutine that collects 10 random numbers
from async_generator using async comprehension.
"""

from typing import List

# Import dynamique pour charger le module nommé "0-async_generator"
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers from
    async_generator using async comprehension and returns them as a list.
    """
    return [number async for number in async_generator()]
