#!/usr/bin/env python3
"""
0-async_generator module

Defines an asynchronous generator coroutine that yields
10 random numbers between 0 and 10 with a 1-second delay.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that loops 10 times,
    each iteration awaits 1 second and yields a random float [0, 10).
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
