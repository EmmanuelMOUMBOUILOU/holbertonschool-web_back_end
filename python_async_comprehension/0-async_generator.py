#!/usr/bin/env python3
"""
Async generator that yields 10 random numbers with a 1 second delay.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine async generator that loops 10 times,
    each time asynchronously waiting 1 second,
    then yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 10
